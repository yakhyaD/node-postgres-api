import dotenv from "dotenv";
import { app } from "./server";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
