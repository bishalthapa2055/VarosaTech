import mongoose from "mongoose";
import config from "../config";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";

export class Database {
  public static async init() {
    try {
      const mongod = config.app.mongoUrl;
      await mongoose.connect(process.env.MONGOURL || mongod);
      // console.log(process.env.MONGO_URI);
      console.log("CONNECTION TO DATABSE ESTABLISHED");

      // //creating admin user
      // const existUser = await User.findOne({ email: "admin@gmail.com" });
      // if (!existUser) {
      //   const mongooseId = new mongoose.Types.ObjectId();

      //   try {
      //     const user = await User.create({ _id: mongooseId });

      //     await User.build({
      //       name: "Test",

      //       email: "admin@gmail.com",
      //       password: "kathmandu",
      //       role: Role.admin,
      //     }).save();
      //   } catch (error) {
      //     throw new BadRequestError("Failed to insert admin");
      //   }
      // } else {
      //   existUser.role = Role.admin;

      //   await existUser.save();
      // }
    } catch (error: any) {
      console.log(error);
    }
  }
}
