import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/models/User";

export async function PUT(req){
mongoose.connect(process.env.MONGO_URL);
const data = await req.json();
const session = await getServerSession(authOptions); 
// console.log({session});
const email = session?.user?.email;
if('name' in data ){
   await  User.updateOne({email},{name:data.name});
}
return Response.json(true)
}