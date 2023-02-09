import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";

const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw new BadRequestError("User unavailable");
    }
    res.status(200).json({ status: true, data: user });
  } catch (e) {
    throw new BadRequestError(
      (e as any).message ? (e as any).message : "Error occured "
    );
  }
};

export { getOneUser as getOneUserHandler };
