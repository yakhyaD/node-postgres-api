import Redis from "ioredis";
import logger from "./utils/logger";

const redisClient = new Redis({
    port: parseInt(process.env.REDIS_PORT as string),
    host: process.env.REDIS_HOST,
});

redisClient.on("connection", function () {
    logger.info("Redis is connected");
});
redisClient.on("error", function (err) {
    logger.error("Redis error.", err);
});

export default redisClient;
