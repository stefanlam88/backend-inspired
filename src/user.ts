
import mongoose = require("mongoose");
const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface IUser extends mongoose.Document {
  userId: string;
  name: string;
  email: string;
  dob: string;
  createdDate: string;
  modifiedDate: string;
}

export const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  createdDate: { type: String, required: true },
  modifiedDate: { type: String, required: true }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
