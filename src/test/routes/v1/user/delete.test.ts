import Express from "../../../../Provider/Express";
import request from "supertest";
import "../../../setup";
import { TestService } from "../../test-services";

const app = Express.app;
const testService = new TestService();

it("endpoint should be defined", async () => {
  const res = await request(app).delete("/api/v1/user/12345678901222114g");
  expect(res.status).not.toEqual(404);
});
it("return 401 if token is not provided", async () => {
  await request(app).delete("/api/v1/user/12345678901222114g").expect(400);
});
it("should retrun 200 after sucessfull creation", async () => {
  const user = await testService.createUser();
  await request(app).delete(`/api/v1/user/${user.id}`).expect(200);
});
