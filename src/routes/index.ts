import { Router } from "express";
import { cache } from "../middleware/cache";
import { deletePost, editPost, getAllPosts, getOnePost } from "./Post";

const router = Router();

router.get("/posts", cache, getAllPosts);
router.get("/posts/:id", cache, getOnePost);
router.put("/posts/:id", editPost);
router.delete("/posts/:id", deletePost);

export default router;
