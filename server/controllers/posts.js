import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res)=>{
       try{
          const postMessages = await PostMessage.find();
          res.status(200).json(postMessages); // ok
       }
       catch(err){
          res.status(404).json({message: err.message});// file not found
       }
}

export const createPosts = async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(err){
        res.status(409).json({message: err.message});
    }
}

export const updatePost = async (req, res)=>{
    const {id:_id} = req.params;
    console.log(_id);
    const post = req.body;
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).json("No post with this id found");
        }
        const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
        res.json(updatedPost);

}
export const deletePost = async (req, res)=>{
    const {id} = req.params;
    console.log(id);
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json("No post with this id found");
        }
        await PostMessage.findByIdAndRemove(id);
        res.status(204);
}

export const likePost = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json("No post with this id found");
    }
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);
}