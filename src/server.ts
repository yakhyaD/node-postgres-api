import express from "express";
import morgan from "morgan";

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get("/", (_, res) => {
    res.json({ "message": "Nodejs Postgres API" });
})
