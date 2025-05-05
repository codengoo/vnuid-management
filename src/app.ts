import dotenv from "dotenv";
import express from "express";
import { initializeRedis } from "./configs/redis";
import router from "./routes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

async function startServer() {
  try {
    await initializeRedis();
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
}

startServer();