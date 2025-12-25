import app from "@/app";
import { createServer } from "http";
import { ENV } from "@/config/env";
import { connectDB } from "@/config/db";
import { clerkMiddleware } from "@clerk/express";

const startServer = async () => {
  try {
    // 1️⃣ Connect to MongoDB first
    await connectDB();

    // 2️⃣ Start HTTP server only after DB is ready
    const httpServer = createServer(app);

    httpServer.listen(ENV.PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
