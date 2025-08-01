import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;

    const collection = dbConnect(collectionNames.workSpaceCollection);
    const data = await collection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};


export const DELETE = async (req, {params}) =>{

  const p = await params;
  const workSpaceCollection = dbConnect(collectionNames.workSpaceCollection);
  const query = { _id : new ObjectId(p.id)};
  const deleteResponse = await workSpaceCollection.deleteOne(query);
  revalidatePath('/dashboard')

  return NextResponse.json(deleteResponse);

}