import mongoose from "mongoose";

export interface PracAttrs {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}
interface PracModel extends mongoose.Model<PracDoc> {
  build(attrs: PracAttrs): PracDoc;
}

export interface PracDoc extends mongoose.Document, PracAttrs {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const PracSchema = new mongoose.Schema<PracDoc>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    passwordRepeat: {
      type: String,
      //   default: "",
      required: true,
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

PracSchema.statics.build = (attrs: PracAttrs) => {
  return new Prac(attrs);
};

const Prac = mongoose.model<PracDoc, PracModel>("Prac", PracSchema);

export { Prac };
