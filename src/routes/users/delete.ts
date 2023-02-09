import { Router } from "express";
import { param } from "express-validator";
import { deleteUserHandler } from "../../controllers/delete";
import { validateRequest } from "../../middlewares/validate-request";
import { isValidObjectId } from "../../services/object-id-validation";

const router = Router();

router.delete(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Invalid Id"),
  ],
  validateRequest,
  deleteUserHandler
);

export { router as deleteUserRouter };
