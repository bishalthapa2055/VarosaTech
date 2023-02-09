import { Response, Request } from "express";
import { body, check } from "express-validator";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";

const createUsers = async (req: Request, res: Response) => {
  try {
    var {
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

    if (!email && !phone) {
      throw new BadRequestError("Email and phone number is required");
    }
    if (email) {
      if (!check(email).isEmail())
        throw new BadRequestError("Email must be a valid email");

      const useremail = await User.findOne({ email });
      if (useremail) {
        throw new BadRequestError("Email already exists");
      }
    }

    if (phone) {
      const regex = /^98\d{8}$/;

      const isMatch = regex.test(phone);
      if (!isMatch) {
        throw new BadRequestError(
          "Phone number should be of 10 digits and starts with 98"
        );
      }

      const phoneExists = await User.findOne({ phone });
      if (phoneExists) {
        throw new BadRequestError("Phone already exits");
      }
    }

    if (modeofcontact) {
      // const modeofContact = modeofcontact.toString();
      if (
        modeofcontact != "email" &&
        modeofcontact != "phone" &&
        modeofcontact != ""
      )
        throw new BadRequestError(
          "Mode of contact must be email or phone or none"
        );
    }

    const createUser = await User.build({
      name,
      gender,
      phone,
      email,
      address,
      nationality,
      dateofbirth,
      educationbackground,
      modeofcontact,
    }).save();
    if (!createUser) {
      res
        .status(400)
        .json({ status: false, message: "Failed to create Users" });
    }

    res.status(200).json({
      status: true,
      message: "User Created sucessfully",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to create User",
      Error: (error as any).message,
    });
  }
};

export { createUsers as createUsersHandler };
