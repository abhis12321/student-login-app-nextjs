import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {mongoUrl , next1} from '/mongo/exp';


export async function GET(req) {
    await mongoose.connect(mongoUrl);
    let data = await next1.find();
    
    return NextResponse.json({data , success:true});
}


export async function POST(req) {
    let res =  await req.json();
    await mongoose.connect(mongoUrl);
    let data = await next1.insertMany([res]);
    
    return NextResponse.json({data , success:true});
}


export async function PUT(req , {params}) {
    return NextResponse.json({success:true});
}