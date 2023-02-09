import { Router } from "express";
import { createUsersHandler } from "../../controllers/create";

const router = Router();

router.post("/", createUsersHandler);

export { router as createUsersHandlerRouter };
