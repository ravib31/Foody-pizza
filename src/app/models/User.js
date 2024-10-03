
import { model, models, Schema } from 'mongoose';
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  name: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String },
},{timestamps:true});

// UserSchema.post('validate',function(user){
//   console.log(user);
//   console.log(user.password)
 
// })

export const User = models?.User || model("User", UserSchema);
