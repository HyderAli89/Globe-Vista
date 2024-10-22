import User from '../models/User.js'


//create new tour
export const createUser=async(req,res)=>{
    const newTour=new User(req.body)
    try{
        const savedUser=await newUser.save()
        res.status(200).json({success:true,message:"sucessfully created", data:savedUser})
    }
    catch(err){
        res.status(500).json({success:false,message:"Failed to create. Try again"})
    }
}

//update user
export const updateUser=async(req,res)=>{
    const id=req.params.id
    try{
        const updatedUser=await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true,message:"sucessfully updated", data:updatedUser})
    }catch(err){
        res.status(500).json({success:false,message:"failed to update"})
    }
}
//delete tour
export const deleteUser=async(req,res)=>{
    const id=req.params.id
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"sucessfully Deleted"})
    }catch(err){
        res.status(500).json({success:false,message:"failed to Delete"})
    }
}
//get  single tour
export const getSingleUser=async(req,res)=>{
    const id=req.params.id
    try{
        const user= await User.findById(id)
        res.status(200).json({success:true,message:"sucessfull",data:user})
    }catch(err){
        res.status(404).json({success:false,message:"not found"})
    }
}

//get All tour
export const getAllUser=async(req,res)=>{

    try{
        const users=await User.find({})
        res.status(200).json(
            {success:true,
            message:"sucessfull",
            data:users}
        )
    }catch(err){
        res.status(404).json({success:false,message:"not found"})
    }
};
