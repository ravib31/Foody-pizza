import { User } from "../../models/User";
import mongoose from "mongoose"
import bcrypt from "bcrypt";

export async function POST(req){
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL, {
  });
  const pass = body.password;
  if(!pass.length || pass.length < 6) {
    new Error("Password must be at least 6 characters long");
    return false;
 };

 const notHashedPass = pass;
 const salt = bcrypt.genSaltSync(10);
 body.password = bcrypt.hashSync(notHashedPass, salt);


  const createdUser = await User.create(body);
   return Response.json(createdUser)
}