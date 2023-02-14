import "../../../setup";
import Express from "../../../../Provider/Express";
import request from "supertest";

import { TestService } from "../../test-services";

const app = Express.app;
const testService = new TestService();

it("endpoint should be defined", async () => {
  const res = await request(app).patch("/api/v1/user/123456789012345678");
  expect(res.status).not.toEqual(404);
});

it("return 401 if token is not provided", async () => {
  await request(app).patch("/api/v1/user/123456789012345678").expect(400);
});

it("should return 200 after sucessfull operation", async () => {
  const user = await testService.createUser();
  await request(app)
    .patch(`/api/v1/user/${user.id}`)
    .send({
      name: "Hola Ram",
      email: "johndoe@gmail.com",
    })
    .expect(200);
});
