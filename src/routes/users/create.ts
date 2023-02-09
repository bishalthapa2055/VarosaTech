import { Router } from "express";
import { body } from "express-validator";
import { createUsersHandler } from "../../controllers/create";
import { validateRequest } from "../../middlewares/validate-request";

const router = Router();

router.post(
  "/",

  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be greater than 3 character"),
    body("address").withMessage("Address is required Field"),
    body("dateofbirth").withMessage("dateofbirth is required Field"),
    body("nationality").withMessage("nationality is required Field"),
    body("educationbackground").withMessage(
      "educationbackground is required Field"
    ),
    body("gender").withMessage("gender is required Field"),
  ],
  validateRequest,
  createUsersHandler
);

export { router as createUsersHandlerRouter };
