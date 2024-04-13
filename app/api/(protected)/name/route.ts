import connectMongoDB from "@/lib/mongodb/db"
import gasSensorSchema from "@/lib/mongodb/models/gasSensorSchema";
import { NextResponse } from "next/server";

export async function POST(request: any){
    const {deviceName,gasConcentration} = await request.json()
    await connectMongoDB();
    await gasSensorSchema.create({deviceName,gasConcentration})
    return NextResponse.json({message:"gasSensorSchema Created"},{status:201})
}