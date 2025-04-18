import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/dbconfig";
import users from "@/models/users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function GET(request) {
  //const dbconn = await connectToDatabase();
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("israr1233", saltRounds);
  const ismatch = await bcrypt.compare("israr1233",hashedPassword);
  if(ismatch)
  {
    console.log("Maatch");
  }
  else
  {
    console.log("Not match!")
  }

  
    return NextResponse.json({"msg":hashedPassword})
  
  }


  export async function POST(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Replace '*' with your frontend domain for better security
      "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    try
    {
      const conn = await connectToDatabase();
      const Userdata = await request.json();
      const { name, email, password } = Userdata;
      const secretKey = process.env.JWT_SECRET; // Store in .env file
 
      const hashedPassword = await bcrypt.hash(password,10);
      const newUser = new users({ "name":name, "email":email, "password":hashedPassword });
      if(name == "" || email == "" || password == "")
      {
        return NextResponse.json(
          { message: "Please fill all fields!" },
          { status: 404 }
        );
      }
      const userexist = await users.findOne({ email }); // Query the database
      if (userexist) {
        return NextResponse.json(
          { message: "User Email already exist!" },
          { status: 404 }
        );
      }

      const savedUser = await newUser.save();
      if(savedUser._id)
      {
        const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
        return NextResponse.json({message:"User Saved Successfully!",data:Userdata,token:token})
      }
    
    
      
    
    }
    catch(error)
    {
    //console.log("Some Thing wrong in database operations",error);
    return NextResponse.json({ message: 'Database error', error: error.message }, { status: 500 });
    }
      
    //return NextResponse.json({status:"User Saved Successfully!",data:Userdata})
    }  
  