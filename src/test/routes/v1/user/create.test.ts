import "../../../setup";
import Express from "../../../../Provider/Express";
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
} from "../../../../common/example";
import { TestService } from "../../test-services";

const app = Express.app;
const testService = new TestService();

it("endpoint should be defined", async () => {
  const res = await request(app).get("/api/v1/user");
  expect(res.status).not.toEqual(400);
});
it("should retuen 400 if name is not provide ", async () => {
  await request(app)
    .post("/api/v1/user")
    // .set({
    //   Authorization: `Bearer ${token}`,
    // })
    .send({
      name: testingUserName,
    })
    .expect(400);
});
// it("return 401 if token is not provided", async () => {
//   await request(app)
//     .post("/api/v1/dashboard/students")
//     .send({
//       name: "Testing Application",
//     })
//     .expect(401);
// });
// it("return 401 if invalid token is provided", async () => {
//   await request(app)
//     .post("/api/v1/dashboard/students")
//     .set({
//       Authorization: `Bearer invalidToken`,
//     })
//     .send({
//       name: "Testing Student",
//     })
//     .expect(401);
// });
// it("should return 403 if user tries to access this route ", async () => {
//   const token = await testService.signinUser();
//   console.log(token);
//   await request(app)
//     .post("/api/v1/dashboard/students")
//     .set({
//       Authorization: `Bearer ${token}`,
//     })

//     .expect(403);
// });
// it("should return id insted of _id and __v must be removed", async () => {
//   const token = await testService.signinAdmin();
//   // console.log(token);
//   const res = await request(app)
//     .post("/api/v1/dashboard/students")
//     .set({
//       Authorization: `Bearer ${token}`,
//     })
//     .send({
//       name: testingStudentName,
//       email: testingStudentEmail,
//       password: testingStudentPassword,
//       role: Role.student,
//       primary_number: 0,
//       dob: 0,
//       category: "",
//     })
//     .expect(201);
//   expect(res.body.data.id).toBeDefined();
//   expect(res.body.data._id).toBeUndefined();
//   expect(res.body.data.__v).toBeUndefined();
// });

it("should return 400 if email is not provided", async () => {
  // const token = await testService.signinAdmin();
  await request(app)
    .post("/api/v1/user")
    // .set({
    //   Authorization: `Bearer ${token}`,
    // })
    .send({
      email: testingUserEmail,
      // password: testingUserPassword,
      // role: Role.student,
    })
    .expect(400);
});
it("should return 400 if phone number is not provided", async () => {
  // const token = await testService.signinAdmin();
  await request(app)
    .post("/api/v1/user")
    // .set({
    //   Authorization: `Bearer ${token}`,
    // })
    .send({
      // name: "Testing Student",
      phone: testingUserPhone,
      // role: Role.student,
    })
    .expect(400);
});

// it("should return 400 if role is not provided", async () => {
//   const token = await testService.signinAdmin();
//   await request(app)
//     .post("/api/v1/dashboard/students")
//     .set({
//       Authorization: `Bearer ${token}`,
//     })
//     .send({
//       name: "Testing Student",
//       email: testingUserEmail,
//       password: testingUserPassword,
//     })
//     .expect(400);
// });

it("should return 201 after successful creation", async () => {
  //   const token = await testService.signinAdmin();
  const data = await request(app)
    .post("/api/v1/user")
    // .set({
    //   Authorization: `Bearer ${token}`,
    // })
    .send({
      name: "Bishal Thapa",
      email: "johndoe@gmail.com",
      address: "kathamdu",
      gender: "male",
      phone: "9877987700",
      nationality: "Nrpali",
      educationbackground: "bE computer",
      dateofbirth: "10 jul 2020",
      modeofcontact: "email",
    })
    .expect(200);
  // console.log(data);
});
