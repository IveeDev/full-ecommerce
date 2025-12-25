import { v2 as Cloudinary } from "cloudinary";

import { ENV } from "./env";

Cloudinary.config({
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_SECRET_KEY,
  secure: true,
});
export default Cloudinary;
