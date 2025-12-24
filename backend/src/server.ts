import app from "@/app";
import { createServer } from "http";

const PORT = process.env.PORT || 3000;
const httpServer = createServer(app);

const server = httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default server;
