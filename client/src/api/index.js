import axios from 'axios';

const url = "https://memory-pevh.onrender.com";
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