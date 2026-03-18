import User from "../models/User";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/utils";

// signup a new user
export const signup = async (req, res)=> {
    const {fullName, email, password, bio} = req.body;
    try {
        if (!fullName || !email || !password || !bio){
            return res.json({success:false, message : "missing details"})
        }
        const user = await User.findOne({email});
        if (user) {
            return res.json({success : false, message : "User already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            email, fullName, password:hashedPassword, bio
        })
        const token = generateToken(newUser._id)
        res.json({success:true, userData:newUser, token, message:"Account created successfully"})   
    }
    catch(error) {
        console.log(error.message)
        res.json({success:false, message:"error.message"})
    }
}

export const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}