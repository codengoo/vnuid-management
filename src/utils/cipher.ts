import crypto from "node:crypto";

export function hashPayload(payload: object): string {
  const json = JSON.stringify(payload);
  return crypto.createHash("sha256").update(json).digest().toString("base64");
}

export function generateECDHKeyPair(): crypto.ECDH {
  const ecdh = crypto.createECDH("secp256k1");
  ecdh.generateKeys();
  return ecdh;
}

export function computeSharedSecret(myECDH: crypto.ECDH, theirPublicKey: string): string {
  return myECDH.computeSecret(Buffer.from(theirPublicKey, "base64")).toString("base64");
}

export function getPublicKey(myECDH: crypto.ECDH): string {
  return myECDH.getPublicKey().toString("base64");
}

export function encryptWithSharedSecret(payload: object, sharedSecret: string): string {
  const hash = hashPayload(payload);

  const iv = Buffer.alloc(16, 0);
  const key = crypto
    .createHash("sha256")
    .update(Buffer.from(sharedSecret, "base64"))
    .digest()
    .slice(0, 32);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([cipher.update(Buffer.from(hash, "base64")), cipher.final()]);

  return encrypted.toString("base64");
}

export function decryptWithSharedSecret(encrypted: string, sharedSecret: string): string {
  const iv = Buffer.alloc(16, 0);
  const key = crypto
    .createHash("sha256")
    .update(Buffer.from(sharedSecret, "base64"))
    .digest()
    .slice(0, 32);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  return decipher.update(Buffer.from(encrypted, "base64")).toString("base64");
}
