import mongoose from "mongoose";

export enum modeofcontact {
  email = "email",
  phone = "phone",
  none = "",
}

export interface UserAttrs {
  name: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  nationality: string;
  dateofbirth: string;
  educationbackground: string;
  // modeofcontact: modeofcontact;
  modeofcontact: String;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

export interface UserDoc extends mongoose.Document, UserAttrs {
  name: string;
  gender: string;
  email: string;
  phone: string;
  nationality: string;
  dateofbirth: string;
  educationbackground: string;
  // modeofcontact: modeofcontact;
  modeofcontact: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<UserDoc>(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    gender: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      default: "",
    },
    address: {
      type: String,
      default: "",
      required: true,
    },
    nationality: {
      type: String,
      default: "",
      //   required: true,
    },
    dateofbirth: {
      type: String,
    },
    educationbackground: {
      type: String,
    },
    modeofcontact: {
      type: String,
      // enum: modeofcontact,
      // default: modeofcontact.none,
      // type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

UserSchema.index({ name: "text" });

UserSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", UserSchema);

export { User };
