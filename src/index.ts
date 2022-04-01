import "./loadEnv";
import { app } from "./server";
import logger from "./utils/logger";

// dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => logger.info(`server listening on port ${PORT}`));
