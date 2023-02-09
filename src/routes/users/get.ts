import { Router } from "express";
import { getAllUsersHandler } from "../../controllers/get";

const router = Router();

router.get("/", getAllUsersHandler);

export { router as getAllUserRouter };
