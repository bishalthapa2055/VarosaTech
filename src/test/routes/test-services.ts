import request from "supertest";
import {
  testingUserEmail,
  testingUserName,
  testingUserGender,
  testingUserPhone,
  testingUserNationality,
  testingUserDateofBirth,
  testingUserEducationBackground,
  testingUserAddress,
  // testingUserModeofContact,
} from "../../common/example";
// import { Role } from "../../common/types/role";

import { User, UserDoc } from "../../models/user";
// import {
//   CategoryEnum,
//   Enrollment,
//   EnrollmentDoc,
// } from "../../models/enrollment";

import Express from "../../Provider/Express";
import mongoose from "mongoose";
// import { Student, StudentDoc } from "../../models/student";
import { BadRequestError } from "../../errors/bad-request-error";
// import { ClassDoc, ClassType, _Class } from "../../models/class";
// import { Payment, PaymentDoc, paymentMethodEnum } from "../../models/payment";

const app = Express.app;

export class TestService {
  // public async signinUser(): Promise<string> {
  //   try {
  //     await User.build({
  //       name: testingUserName,

  //       email: testingUserEmail,
  //       password: testingUserPassword,
  //       role: Role.user,
  //     }).save();

  //     const response = await request(Express.app)
  //       .post("/api/v1/dashboard/auth/signin")
  //       .send({
  //         email: testingUserEmail,
  //         password: testingUserPassword,
  //       })
  //       .expect(200);

  //     return response.body.accessToken;
  //   } catch (error) {
  //     throw new BadRequestError("failed to create user");
  //   }
  // }

  // public async signinStudent(): Promise<string> {
  //   try {
  //     const mongooseId = new mongoose.Types.ObjectId();
  //     // const userDetail = await UserDetail.create({ _id: mongooseId });
  //     await Student.build({
  //       name: testingStudentName,
  //       email: testingStudentEmail,
  //       password: testingStudentPassword,
  //       role: Role.student,
  //       primary_number: "9887726222",
  //       dob: "3373737737",
  //       category: "",
  //     }).save();

  //     const response = await request(Express.app)
  //       .post("/api/v1/dashboard/auth/signin")
  //       .send({
  //         email: testingStudentEmail,
  //         password: testingUserPassword,
  //       })
  //       .expect(200);

  //     return response.body.accessToken;
  //   } catch (error) {
  //     throw new BadRequestError("failed to create student");
  //   }
  // }

  // public async signinWebStudent(): Promise<string> {
  //   try {
  //     const mongooseId = new mongoose.Types.ObjectId();
  //     // const userDetail = await UserDetail.create({ _id: mongooseId });
  //     await Student.build({
  //       name: testingStudentName,
  //       email: testingStudentEmail,
  //       password: testingStudentPassword,
  //       role: Role.student,
  //       primary_number: "9887726222",
  //       dob: "535337733",
  //       category: "",
  //     }).save();

  //     const response = await request(Express.app)
  //       .post("/api/v1/web/students/signin")
  //       .send({
  //         email: testingStudentEmail,
  //         password: testingUserPassword,
  //       })
  //       .expect(200);

  //     return response.body.accessToken;
  //   } catch (error) {
  //     throw new BadRequestError("failed to create student");
  //   }
  // }

  public createUser(): Promise<UserDoc> {
    return User.build({
      email: testingUserEmail,
      name: testingUserName,
      gender: testingUserGender,
      address: testingUserAddress,
      phone: testingUserPhone,
      nationality: testingUserNationality,
      dateofbirth: testingUserDateofBirth,
      educationbackground: testingUserEducationBackground,
      modeofcontact: " ",
    }).save();
  }

  // public async signinAdmin(): Promise<string> {
  //   await User.build({
  //     name: testingAdminName,
  //     email: testingAdminEmail,
  //     password: testingAdminPassword,
  //     role: Role.admin,
  //   }).save();

  //   const response = await request(Express.app)
  //     .post("/api/v1/dashboard/auth/signin")
  //     .send({
  //       email: testingAdminEmail,
  //       password: testingAdminPassword,
  //     })
  //     .expect(200);

  //   return response.body.accessToken;
  // }

  // //   try {
  // //     const mongooseId = new mongoose.Types.ObjectId();

  // //     await User.build({
  // //       name: testingAdminName,

  // //       email: testingAdminEmail,
  // //       password: testingAdminPassword,
  // //       role: Role.admin,
  // //     }).save();

  // //     const response = await request(Express.app)
  // //       .post("/api/v1/dashboard/auth/signin")
  // //       .send({
  // //         email: testingAdminEmail,
  // //         password: testingAdminPassword,
  // //       })
  // //       .expect(200);

  // //     return response.body.accessToken;
  // //   } catch (error) {
  // //     console.log("error", error);
  // //     throw new BadRequestError("failed to create admin");
  // //   }

  // public async createClass(): Promise<{
  //   token: string;
  //   _class: ClassDoc;
  // }> {
  //   // const mongooseId = new mongoose.Types.ObjectId();
  //   const token = await this.signinAdmin();
  //   const _class = await _Class
  //     .build({
  //       name: "ramdai",
  //       type: ClassType.physical,
  //       price: 3000,
  //       start_date: 0,
  //       end_date: 0,
  //       capacity: 0,
  //     })
  //     .save();

  //   // const response = await request(Express.app)
  //   //   .post("/api/v1/dashboard/class")
  //   //   .set({
  //   //     Authorization: `Bearer ${token}`,
  //   //   })
  //   //   .send({
  //   //     name: "ramdai",
  //   //     price: 0,
  //   //     start_date: 0,
  //   //     end_date: 0,
  //   //     capacity: 0,
  //   //   });
  //   // console.log("resbody", response.body);
  //   // console.log("token", token);

  //   return {
  //     token,
  //     _class,
  //   };
  // }
  // public async createEnrollment(): Promise<{
  //   token: string;
  //   enrollment: EnrollmentDoc;
  // }> {
  //   const mongooseId = new mongoose.Types.ObjectId();
  //   const { token, _class } = await this.createClass();

  //   const student = await this.createStudent();
  //   const isStudent = await Student.findOne({ _id: student._id });

  //   const enrollment = await Enrollment.build({
  //     enrollment_date: 0,
  //     class_cost: _class.price,
  //     discount: 0,
  //     amount_paid: 100,
  //     student: isStudent!._id,
  //     email: isStudent!.email,
  //     student_name: isStudent!.name,
  //     class_id: _class!._id,
  //     class_name: _class.name,
  //     class_start_date: 0,
  //     class_end_date: 0,
  //     category: CategoryEnum.Agriculture,
  //     course: "",
  //   }).save();
  //   return {
  //     token,
  //     enrollment,
  //   };
  // }

  // public async createPayment(): Promise<{
  //   payment: PaymentDoc;
  // }> {
  //   const { token, enrollment } = await this.createEnrollment();

  //   const payment = await Payment.build({
  //     amount: 100,
  //     student: enrollment.student,
  //     payment_date: 0,
  //     payment_method: paymentMethodEnum.cash,
  //   }).save();
  //   return {
  //     payment,
  //   };
  // }
}
