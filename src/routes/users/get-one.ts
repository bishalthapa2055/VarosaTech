import { Router } from "express";
import { param } from "express-validator";
import { getOneUserHandler } from "../../controllers/get-one";
import { validateRequest } from "../../middlewares/validate-request";
import { isValidObjectId } from "../../services/object-id-validation";

const router = Router();

router.get(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Invalid Id"),
  ],
  validateRequest,
  getOneUserHandler
);

export { router as getOneUserRouter };
