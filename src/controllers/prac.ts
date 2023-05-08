import { Response, Request } from "express";
import { body, check } from "express-validator";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";
import { Prac } from "../models/abc";

const createPrac = async (req: Request, res: Response) => {
  try {
    let { username, email, password, passwordRepeat } = req.body;
    console.log(req.body);

    const pracUser = await Prac.build({
      username,
      email,
      password,
      passwordRepeat,
    }).save();
    if (!pracUser) {
      res.status(400).json({ status: false, message: "Failed to create Prac" });
    }

    res.status(200).json({
      status: true,
      message: "User Created sucessfully",
      data: pracUser,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to create Prac",
      Error: (error as any).message,
    });
  }
};

export { createPrac as createPracHandler };
