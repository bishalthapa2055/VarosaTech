import express from "express";
import { Router } from "express";
import { indexUserRouter } from "./users";
import { createPracHandler } from "../controllers/prac";
import { getPracHandler } from "../controllers/getPrac";

const router = Router();

router.use("/user", indexUserRouter);
router.post("/prac", createPracHandler);
router.get("/gerprac", getPracHandler);

export { router as indexRouter };
