
import { model, models, Schema } from 'mongoose';
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, validate:pass => {
    if(!pass.length || pass.length < 6) {
       new Error("Password must be at least 6 characters long");
       return false;
    }
  } },
},{timestamps:true});

UserSchema.post('validate',function(user){
  console.log(user);
  console.log(user.password)
  const notHashedPass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPass, salt);
})

export const User = models?.User || model("User", UserSchema);
