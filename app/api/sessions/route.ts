import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const sessions = await prisma.session.findMany();
    const data = await sessions;
    return NextResponse.json(data)
}

