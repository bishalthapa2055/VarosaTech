import { Router } from "express";
import { body, check } from "express-validator";
import { createUsersHandler } from "../../controllers/create";
import { validateRequest } from "../../middlewares/validate-request";

const router = Router();

router.post(
  "/",

  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be greater than 3 character"),
    body("address").notEmpty().withMessage("Address is required Field"),
    body("dateofbirth").notEmpty().withMessage("dateofbirth is required Field"),
    body("nationality").notEmpty().withMessage("nationality is required Field"),
    body("educationbackground")
      .notEmpty()
      .withMessage("educationbackground is required Field"),
    body("gender").notEmpty().withMessage("gender is required Field"),
  ],
  validateRequest,
  createUsersHandler
);

export { router as createUsersHandlerRouter };
