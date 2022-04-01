import { Router } from "express";
import { deletePost, editPost, getAllPosts, getOnePost } from "./Post";

const router = Router();

router.get("/posts", getAllPosts);
router.get("/posts/:id", getOnePost);
router.put("/posts/:id", editPost);
router.delete("/posts/:id", deletePost);

export default router;
