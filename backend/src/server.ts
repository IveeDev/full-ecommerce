import app from "@/app";
import { createServer } from "http";
import { ENV } from "@/config/env";

const httpServer = createServer(app);

const server = httpServer.listen(ENV.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${ENV.PORT}`);
});

export default server;
