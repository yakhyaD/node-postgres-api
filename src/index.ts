import dotenv from "dotenv";

import { app } from "./server";
import pool from "./db";
dotenv.config();

const PORT = process.env.PORT || 5000;

pool.connect().then(() => {
    console.log("Connected to database");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
