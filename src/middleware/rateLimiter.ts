import rateLimit from 'express-rate-limit';
import { WINDOW_SIZE, MAX_WINDOW_REQUEST_COUNT } from '../utils/constants';

export const rateLimiter = rateLimit({
    windowMs: WINDOW_SIZE, // 1 mn in milliseconds
    max: MAX_WINDOW_REQUEST_COUNT,
    message: `You have exceeded the number of requests in the time limit!`,
    headers: true,
});
