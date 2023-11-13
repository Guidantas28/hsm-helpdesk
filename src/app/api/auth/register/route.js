import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export async function POST(req) {
  try{
    const { name, email, password } = req.body;
    await connect();
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return NextResponse.json({ message: "Email já cadastrado" }, { status: 409 });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User ({ name, email, password: hashedPassword });
    await newUser.save();

  

  } catch(err) {
    throw new Error(err);
  }

}