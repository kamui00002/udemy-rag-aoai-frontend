import {NextRequest, NextResponse} from "next/server";
import {getOnYourData} from "@/util/openai";

export const POST = async (req: NextRequest) => {
    try{
        const {message} = await req.json();
        const result = await getOnYourData(message);
        const aiMessage = result[0].message.content;
        return NextResponse.json({aiMessage}, {status: 200});
    } catch (error) {
        console.error("/api/onyourdata error:", error);
        let errMessage = "Unknown error";
        if (error instanceof Error) {
            errMessage = error.message;
        } else if (typeof error === "object" && error !== null && "message" in error) {
            errMessage = String((error as { message: unknown }).message);
        } else if (typeof error === "object" && error !== null && "code" in error) {
            const e = error as { code?: string; message?: string };
            errMessage = e.message ? `${e.code}: ${e.message}` : String(e.code);
        }
        return NextResponse.json({aiMessage: errMessage}, {status: 500});
    }
}