import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const workplaceCollection = dbConnect(collectionNames.workSpaceCollection);

    const result = await workplaceCollection.insertOne(body);

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
    return NextResponse.json({status: 500 });
  }
};

