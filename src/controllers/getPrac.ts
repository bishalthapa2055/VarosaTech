import { Request, Response } from "express";
import { Prac } from "../models/abc";
import { BadRequestError } from "../errors/bad-request-error";

const getPrac = async (req: Request, res: Response) => {
  try {
    const data = await Prac.find();
    if (!data) {
      throw new BadRequestError("Unable to find prac");
    }
    res.status(200).json({ status: true, data: data });
  } catch (e) {
    res.status(400).json({ status: false, Error: "Unable to find prac" });
  }
};

export { getPrac as getPracHandler };
