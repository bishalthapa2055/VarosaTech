import { Router } from "express";
import { body, check, param } from "express-validator";
import { updateUserHandler } from "../../controllers/update";
import { validateRequest } from "../../middlewares/validate-request";
// import validateObjectId from "../../services/object-id-validation";
import { isValidObjectId } from "../../services/object-id-validation";

const router = Router();
router.patch(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Invalid ID"),

    body("email")
      .isEmail()
      .withMessage("Email field is required and must be a valid email"),
    body("phone")
      .custom((value) => {
        if (value) {
          var strVal = value.toString();
          const regex = /^98\d{8}$/;
          const isMatch = regex.test(strVal);
          if (!isMatch) {
            return false;
          }
        }
        return true;
      })
      .withMessage("Valid Phone number is required"),
  ],
  validateRequest,
  updateUserHandler
);

export { router as updateUserRouter };
