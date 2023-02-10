import supertest = require("supertest");
import { app } from "../app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

describe("user", () => {
  // beforeAll(async () => {
  //   const mongoServer = await MongoMemoryServer.create();

  //   await mongoose.connect(mongoServer.getUri());
  // });
  // afterAll(async () => {
  //   await mongoose.disconnect();
  //   await mongoose.connection.close();
  // });
  describe("get user route", () => {
    describe("given the user doesnot exists", () => {
      it("should return a 404 ", async () => {
        // expect(true).toBe(true);
        const id = "user - 1234";
        await supertest(app).get(`/api/v1/user/${id}`).expect(404);
      });
    });
  });
});
