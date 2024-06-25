import { sessionAtom } from "@/app/store/src/atoms/sessionData";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { useRecoilState } from "recoil";

export async function GET(request: Request) {
    const [sId,setSId]=useRecoilState(sessionAtom)
    const updateUser = await prisma.session.update({
        where: {
          id:sId ,
        },
        data: {
          available: false,
        },
      })
      return NextResponse.json({msg:"db updated"})
}
