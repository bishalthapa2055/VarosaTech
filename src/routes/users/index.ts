import { Router } from "express";
import { createUsersHandlerRouter } from "./create";
import { deleteUserRouter } from "./delete";
import { getAllUserRouter } from "./get";
import { getOneUserRouter } from "./get-one";
import { updateUserRouter } from "./update";

const router = Router();

router.use(getAllUserRouter);
router.use(deleteUserRouter);
router.use(updateUserRouter);
router.use(createUsersHandlerRouter);
router.use(getOneUserRouter);

export { router as indexUserRouter };
