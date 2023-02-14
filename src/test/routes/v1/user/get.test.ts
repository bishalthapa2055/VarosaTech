import "../../../setup";
import Express from "../../../../Provider/Express";
import request from "supertest";

import { TestService } from "../../test-services";

// import { exist } from "joi";

const app = Express.app;
const testService = new TestService();

it("endpoint should be defined", async () => {
  const res = await request(app).get("/api/v1/user");
  expect(res.status).not.toEqual(400);
});
// it("return 401 if token is not provided", async () => {
//   await request(app)
//     .get("/api/v1/dashboard/students")
//     .send({
//       name: "Testing Application",
//     })
//     .expect(401);
// });
// it("return 401 if invalid token is provided", async () => {
//   await request(app)
//     .get("/api/v1/dashboard/students")
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
//   // console.log(token);
//   await request(app)
//     .get("/api/v1/dashboard/students")
//     .set({
//       Authorization: `Bearer ${token}`,
//     })
//     .expect(403);
// });

it("should return data, total, results", async () => {
  // const token = await testService.signinAdmin();
  const res = await request(app).get("/api/v1/user");
  // .set({
  //   Authorization: `Bearer ${token}`,
  // })
  // .expect(200);
  expect(res.body.data).toBeDefined();
  expect(Array.isArray(res.body.data)).toBeTruthy();
  expect(res.body.total).toBeDefined();
  expect(res.body.result).toBeDefined();
  // console.log(res.body.data);
});
