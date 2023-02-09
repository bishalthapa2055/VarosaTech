import express from "express";
import { Router } from "express";
import { indexUserRouter } from "./users";

const router = Router();

router.use("/user", indexUserRouter);

export { router as indexRouter };
