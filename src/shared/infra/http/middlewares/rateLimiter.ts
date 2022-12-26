import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import * as redis from "redis";

import AppError from "@shared/errors/AppError";

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 10,
  duration: 5,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    next();
  } catch (err) {
    throw new AppError("Too may requests", 429);
  }
}
