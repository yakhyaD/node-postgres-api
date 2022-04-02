import logger from "../utils/logger";
import redisManager from "../cacheManager";
import { NextFunction, Request, Response } from "express";

export const cache = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    let key = "";
    if (id) {
        key = `post:${id}`;
    } else {
        key = "posts";
    }
    redisManager.get(key, (err, result) => {
        if (err) {
            logger.error("err", err);
            return res.status(500).json({ "server error": err.message });
        }
        if (result) {
            logger.info("data from cache");
            return res.json({ key: JSON.parse(result) });
        } else {
            return next();
        }
    });
}
