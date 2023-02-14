import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";

import Express from "../Provider/Express";

declare global {
  namespace NodeJS {
    interface Global {
      // signinUser(): Promise<string>;
    }
  }
}

// jest.setTimeout(10000000);
jest.setTimeout(100000000);

let mongo: any;
beforeAll(async () => {
  // process.env.SENDGRID_TOKEN= "dfnsaofndsoakfdsafds"
  // sgMail.setApiKey(process.env.SENDGRID_TOKEN);

  // process.env.JWT_KEY = "key";
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  // jest.clearAllMocks();
  await mongo.stop();
  await mongoose.connection.close();
});

// global.signinUser = async (): Promise<string> => {
//   const response = await request(Express.app)
//     .post("/api/v1/dashboard/auth/signup")
//     .send({
//       email: testingUserEmail,
//       password: testingUserPassword,
//       name: testingUserName,
//     })
//     .expect(201);

//   const accessToken = response.body.accessToken;

//   return accessToken;
// };
