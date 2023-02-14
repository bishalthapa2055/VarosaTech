import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    mongoUrl: process.env.MONGO_URI! || "mongodb://localhost:27017/newVarosa",
    host: process.env.APP_HOST || "localhost",

    port: process.env.PORT || 8848,
    allowedOrigins: process.env.ALLOWED_ORIGINS || "http://localhost:8848",
    //  "http://localhost:8848"
  },
};

export default config;
