
import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, validate:pass => {
    if(!pass.length || pass.length < 6) {
       new Error("Password must be at least 6 characters long");
       return false;
    }
  } },
},{timestamps:true});

export const User = models?.User || model("User", UserSchema);
