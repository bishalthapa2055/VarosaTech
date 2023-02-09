const ObjectId = require("mongoose").Types.ObjectId;

export function isValidObjectId(id: string) {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true;
    return false;
  }
  return false;
}

// import mongoose from "mongoose";

// const validateObjectId = (id: any) => {
//   return mongoose.Types.ObjectId.isValid(id);
// };
// export default validateObjectId;
