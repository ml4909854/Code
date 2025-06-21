

const express = require("express")
const auth = require("../middleware/auth.middleware")
const upload = require("../middleware/upload.middleware")
const Profile = require("../model/profile.model")
const router = express.Router()

// get a profile by profile Id 
// ✅ Get current user's profile by their userId
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: "No profile found!" });
    }

    res.status(200).json({
      message: "Profile fetched successfully!",
      profile: profile
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});


// update and post our profile again..

router.post("/postAndUpdate" , auth , upload.single("profileImage") , async(req , res)=>{
    try {

        const {fullname , bio} = req.body
        const userId = req.user._id
        const imageUrl = req.file.path

        // create or update profile
        const profile = await Profile.findOneAndUpdate({
            userId:userId
        } ,{
            fullname,
            bio,
            imageUrl:imageUrl,
            userId:userId
        },{
            new:true,
            upsert:true
        })

        res.status(200).json({message:"Profile created/updated successfully!" , profile:profile})

        
    } catch (error) {
        res.status(500).send({message:"Error to profile post/update" , error:error.message})
    }
})

module.exports = router