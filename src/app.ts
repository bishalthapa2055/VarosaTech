import express from "express";
import { indexRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", indexRouter);
app.all("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, message: "Deployed first server in render" });
});

app.all("*", (req, res) => {
  res.status(400).json({ status: false, message: "Unable to find the routes" });
});

export { app };
