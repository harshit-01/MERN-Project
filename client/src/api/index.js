import axios from 'axios';

<<<<<<< HEAD
const url = "https://memory-pevh.onrender.com/posts";
=======
const url = "https://memory-pevh.onrender.com";
>>>>>>> cb0271eb376bfdf1df8dbde607e9889902f10ce1
export const fetchPosts = ()=>{
     return axios.get(url);
}
export const createPosts = (newPost)=>{
     return axios.post(url,newPost);
}
export const updatePost = (id,post)=>{
     return axios.patch(`${url}/${id}`,post)
}
export const deletePost = (id)=>{
     return axios.delete(`${url}/${id}`)
}
export const likePost = (id)=>{
     return axios.patch(`${url}/${id}/likePost`)
}