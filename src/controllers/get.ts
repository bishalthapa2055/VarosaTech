import { Response, Request, NextFunction } from "express";

import { User } from "../models/user";
import { ApiFeatures } from "../utils/api-services";

// serching and pagination of users

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  // searching the users
  try {
    let documentCount = await User.estimatedDocumentCount();
    const searchTerm = req.query.searchTerm as string | undefined;

    // advance features within users
    let features: ApiFeatures;
    if (searchTerm) {
      features = new ApiFeatures(
        User.find({
          $and: [
            {
              name: {
                $regex: searchTerm,
                $options: "xi",
              },
            },
          ],
        }),
        req.query
      )
        .filter()
        .sort()
        .limitFields()
        .paginate();
    } else {
      features = new ApiFeatures(User.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    }

    let doc = await features.query;

    res.status(200).json({
      result: doc.length,
      total: documentCount,
      data: doc,
    });
  } catch (error) {
    res.status(400).json({ status: false, message: "Failed to get users" });
  }
};

export { getAllUsers as getAllUsersHandler };
