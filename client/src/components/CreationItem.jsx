import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-sm transition-shadow duration-200'
    >
      <div className='flex justify-between items-center gap-4'>
        <div>
          <h2 className='font-medium text-slate-700'>{item.prompt}</h2>
          <p className='text-gray-500'>
            {item.type} • {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full'>
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className='mt-3'>
          {item.type === 'image' ? (
            <img
              src={item.content}
              alt="generated"
              className='mt-3 w-full max-w-md rounded-lg border border-gray-100'
            />
          ) : (
            <div className='mt-3 max-h-64 overflow-y-auto text-slate-700 whitespace-pre-wrap'>
              <div className='reset-tw'>
                <Markdown>
                  {item.content}
                </Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem
