import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try{
        const body = await req.json();
        const tasksCollection = dbConnect(collectionNames.taskCollection);

        const result = await tasksCollection.insertOne(body);

        
        return NextResponse.json(result);

    }
    catch(err){
        console.log(err);
        return NextResponse.json({status: 500});
        
    }
}