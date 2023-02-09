import { Response, Request } from "express";
import { check } from "express-validator";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";

const updateUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  try {
    const {
      name,
      gender,
      phone,
      email,
      address,
      nationality,
      dateofbirth,
      educationbackground,
      modeofcontact,
    } = req.body;
    if (!user) {
      throw new BadRequestError("User not found");
    }

    if (email) {
      const useremail = await User.findOne({ email });
      if (useremail) {
        throw new BadRequestError("Email already exists");
      }
    }

    if (phone) {
      const phoneExists = await User.findOne({ phone });
      if (phoneExists) {
        throw new BadRequestError("Phone already exits");
      }
    }

    user!.name = name || user?.name;
    user!.email = email || user?.email;
    user!.gender = gender || user?.gender;
    user!.phone = phone || user?.phone;
    user!.address = address || user?.address;
    user!.nationality = nationality || user?.nationality;
    user!.dateofbirth = dateofbirth || user?.dateofbirth;
    user!.educationbackground =
      educationbackground || user?.educationbackground;
    user!.modeofcontact = modeofcontact || user?.modeofcontact;

    const updatedUser = await user!.save();
    res.status(200).json({
      status: true,
      message: "Sucessfully Updated User",
      UpdatedData: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      Error: (error as any).message,
      message: "Failed to update",
    });
    // throw new BadRequestError(
    //   (error as any).message ? (error as any).message : "Debug Backend"
    // );
  }
};

export { updateUser as updateUserHandler };
