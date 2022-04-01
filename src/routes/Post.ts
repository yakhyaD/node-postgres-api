import { Request, Response } from "express";
import pool from "../db";


/******************************************************************************
 *                      Get All Post - "GET /api/posts"
 ******************************************************************************/
export const getAllPosts = async (_: Request, res: Response) => {
    try {
        const results = await pool.query("SELECT * FROM post limit 10");
        return res.json({ posts: results.rows });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}


/******************************************************************************
 *                      Get One Post - "GET /api/posts/:id"
 ******************************************************************************/
export const getOnePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const results = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
        if (results.rowCount < 1) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.json({ post: results.rows[0] });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const editPost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, content } = req.body;
    try {
        await pool.query("UPDATE post SET title = $1, content = $2 WHERE id = $3", [title, content, id]);
        return res.json({ message: "post edited successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await pool.query("DELETE FROM post WHERE id = $1", [id]);
        return res.json({ message: "post deleted successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}