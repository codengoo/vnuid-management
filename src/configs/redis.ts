import { createClient } from "redis";

const redis_url = process.env.REDIS_URL;
const redisClient = createClient({ url: redis_url });

redisClient.on("error", (err) => console.error("Redis Client Error", err));

const initializeRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

export { initializeRedis, redisClient };
