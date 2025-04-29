import amqp from "amqplib";
import { v4 as uuidv4 } from "uuid";

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const host = process.env.AMQP || "amqp://localhost";
    const connection = await amqp.connect(host); // or your RabbitMQ URI
    channel = await connection.createChannel();
    console.log("✅ Connected to RabbitMQ");
  } catch (error) {
    console.error("❌ RabbitMQ connection error:", error);
  }
};

export const sendToQueue = async (queue: string, msg: object) => {
  if (!channel) throw new Error("RabbitMQ channel not initialized");

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
};

export const consumeQueue = async (
  queue: string,
  callback: (msg: any) => void,
) => {
  if (!channel) throw new Error("RabbitMQ channel not initialized");

  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      callback(JSON.parse(msg.content.toString()));
      channel.ack(msg);
    }
  });
};

export const sendAndWait = async <T = any>(
  queue: string,
  msg: object,
): Promise<T> => {
  if (!channel) throw new Error("RabbitMQ channel not initialized");

  const correlationId = uuidv4();
  const replyQueue = await channel.assertQueue("", { exclusive: true });

  return new Promise((resolve) => {
    channel.consume(
      replyQueue.queue,
      (msg) => {
        if (msg?.properties.correlationId === correlationId) {
          const result = JSON.parse(msg.content.toString());
          resolve(result);
        }
      },
      { noAck: true },
    );

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
      correlationId,
      replyTo: replyQueue.queue,
    });
  });
};
