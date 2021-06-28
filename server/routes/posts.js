import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { createPosts } from '../controllers/posts.js';
import { updatePost } from '../controllers/posts.js';
import { deletePost } from '../controllers/posts.js';
import { likePost } from '../controllers/posts.js';

const router = express.Router();
router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
export default router;