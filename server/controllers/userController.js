import sql from "../configs/db.js";

// This function is correct!
export const getUserCreations = async (req, res)=> {
    try {
        const {userId} = req.auth()

        const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC `;
        res.json({success: true, creations});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// This function is correct!
export const getPublishedCreations = async (req, res)=> {
    try {
        const creations = await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC `;
        res.json({success: true, creations});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// This function has been fixed
export const toggleLikeCreation = async (req, res)=> {
    try {
        const {userId} = req.auth()
        const {id} = req.body

        const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`

        if(!creation){
            return res.json({ success: false, message: "Creation not found" })
        }

        // ✅ FIX 1: Handle null likes by defaulting to an empty array
        const currentLikes = creation.likes || [];
        const userIdStr = userId.toString();
        let updatedLikes;
        let message;

        if(currentLikes.includes(userIdStr)){
            updatedLikes = currentLikes.filter((user)=> user !== userIdStr);
            message = 'Creation Unliked' // ✅ FIX 4: Typo fix
        }else{
            updatedLikes = [...currentLikes, userIdStr]
            message = 'Creation Liked'
        }

        const formattedArray = `{${updatedLikes.join(',')}}`
        // The postgres.js library will format it correctly.
        await sql`UPDATE creations SET likes = ${formattedArray} WHERE id = ${id}`;

        res.json({success: true, message});
  In } catch (error) {
        res.json({success: false, message: error.message});
    }
}