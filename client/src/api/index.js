import axios from 'axios';

const url = "https://re-live-past.herokuapp.com/posts";
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