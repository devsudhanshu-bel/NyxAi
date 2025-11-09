import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'

// Set the base URL for axios requests
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const { getToken } = useAuth();

  const fetchCreations = async () => {
    try {
      const { data } = await axios.get('api/user/get-published-creations', {
        headers: { Authorization: `Bearer ${await getToken()}` }
      })
      if (data.success) {
        setCreations(data.creations)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      // Use error.message for better debugging in catch blocks
      toast.error(error.message || "Failed to fetch creations")
    }
    setLoading(false)
  }

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post('api/user/toggle-like-creation', { id }, {
        headers: { Authorization: `Bearer ${await getToken()}` }
      })

      if (data.success) {
        toast.success(data.message)
        await fetchCreations() // Re-fetch to show the latest state
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message || "Failed to toggle like")
    }
  }

  useEffect(() => {
    if (user) {
      fetchCreations()
    }
  }, [user])

  // This is the updated return block with the improved loading state
  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-lg font-semibold mb-4'>Creations</h2>

      {/* This is the main fix:
        The loading check is moved *inside* the main layout container.
      */}
      {loading ? (
        // This container centers the spinner in the available space
        <div className='flex-1 h-full flex items-center justify-center'>
          <span className='w-10 h-10 rounded-full border-4 border-primary 
                 border-t-transparent animate-spin'></span>
        </div>
      ) : (
        // This is your original code for displaying the creations
        <div className='bg-white h-full w-full rounded-xl overflow-y-scroll flex flex-wrap'>
          {creations.map((creation, index) => (
            <div
              key={index}
              className='relative group m-3 w-full sm:w-[48%] lg:w-[31%] rounded-lg overflow-hidden cursor-pointer h-60'
            >
              <img
                src={creation.content}
                alt={creation.prompt || 'AI creation'}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />

              {/* gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white p-4'>
                <p className='text-sm truncate'>{creation.prompt}</p>
                <div className='flex items-center gap-1 mt-2'>
                  <p>{creation.likes.length}</p>
                  <Heart onClick={() => imageLikeToggle(creation.id)}
                    className={`w-4 h-4 hover:scale-110 cursor-pointer transition 
                      ${creation.likes.includes(user?.id)
                        ? 'fill-red-500 text-red-600'
                        : 'text-white'
                      }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Community