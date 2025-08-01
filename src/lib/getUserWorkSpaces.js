import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import dbConnect, { collectionNames } from "./dbConnect";
import { NextResponse } from "next/server";

export const getUserWorkSpaces = async () => {
    const session = await getServerSession(authOptions);
    
    if(session){
        const email = session?.user?.email;
        const workplaceCollection = dbConnect(collectionNames.workSpaceCollection);
        const result = workplaceCollection.find({creatorEmail: email}).toArray();

        return result;
    }

    return NextResponse.json({message: 'unauthorized'}, {status:401});
}