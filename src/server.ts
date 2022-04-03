import express from "express";
import morgan from "morgan";
import { rateLimiter } from "./middleware/rateLimiter";
import BaseRouter from "./routes";

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use("/api", BaseRouter);
