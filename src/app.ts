import express from "express";
import cors from "cors";
import { indexRouter } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", indexRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Deploying server for first time in render . com",
  });
});
app.all("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Deploying server for first time in render . com",
  });
});

app.all("*", (req, res) => {
  res.status(400).json({ status: false, message: "Unable to find the routes" });
});

export { app };
