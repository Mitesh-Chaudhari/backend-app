import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";
import jwt from 'jsonwebtoken';
import { User } from "../models/user.medel.js";

export const verifyJWT = asyncHandler(async(req, _, next) => {

    try {
        const token = req.cookies?.accessToken || 
                      req.header("Authorization")?.replace("Bearer ", "") //To get accesstoken from header without Bearer. So, here we are replacing Bearer with empty string
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, proccess.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user; //sending this user in request so we can access through req.user
        next()
    } catch (error) {
        throw new ApiError(401, "Invalid Access Token")
    }
})