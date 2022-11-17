import PostModel from '../models/Post.model.js';
import User from '../models/User.model.js';
import { success, error, serverError } from '../helpers/responses.js';


const createPost = async (req, res) => {
    
    const {title, description, resource, date, user, programming_l, category, ranking} = req.body;
    
    try {
        const newPost = await new PostModel({
            title,
            description,
            resource,
            date,
            user,
            programming_l,
            category,
            ranking
        });

        const savePost = await newPost.save();
        success({ res, message: `post created successfully`, data: savePost });
        
    } catch (error) {
        return serverError({ res, message: error.message });
    }
}



export {createPost} 