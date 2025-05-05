import { redisClient } from "@/configs/redis";
import { RD_checkin_key } from "@/constants";
import { decryptWithSharedSecret, hashPayload } from "@/utils";

export async function saveTokenToRedis(uid: string, sharedKey: string) {
  const key = `${RD_checkin_key}:${uid}`;

  await redisClient.set(key, sharedKey);
  await redisClient.expire(key, 60); // 1h
}

export async function getTokenFromRedis(uid: string): Promise<string | null> {
  const key = `${RD_checkin_key}:${uid}`;
  const result = await redisClient.get(key);

  return result;
}

export async function clearTokenFromRedis(uid: string): Promise<boolean> {
  const key = `${RD_checkin_key}:${uid}`;
  await redisClient.del(key);

  return true;
}

export async function validatePayload(
  payload: object,
  uid: string,
  encrypted: string,
): Promise<boolean> {
  const sharedKey = await getTokenFromRedis(uid);
  if (!sharedKey) return false;

  // hash payload
  const currentDataHash = hashPayload(payload);

  // encrypt hash
  const decrypted = decryptWithSharedSecret(encrypted, sharedKey);
  return decrypted === currentDataHash;
}
