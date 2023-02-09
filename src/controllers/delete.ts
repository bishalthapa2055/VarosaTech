import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";

import { User } from "../models/user";

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new BadRequestError("User doesnot exists");
    }

    res.status(200).json({ status: true, message: "sucessfully Deleted User" });
  } catch (error) {
    res.status(400).json({
      status: false,
      Error: (error as any).message,
      message: "ID not found",
    });
  }
};

export { deleteUser as deleteUserHandler };
