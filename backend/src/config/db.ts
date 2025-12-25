import mongoose from "mongoose";
import { ENV } from "./env";

const MONGO_URI = ENV.DB_URL as string;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined");
}

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI, {
      autoIndex: true, // good for development
    });

    console.log("✅ MongoDB connected successfully");

    mongoose.connection.on("error", err => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });
  } catch (error) {
    console.error("❌ MongoDB initial connection failed:", error);
    process.exit(1);
  }
};
