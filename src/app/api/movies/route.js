import  {getMovies} from "@/db/api-data";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(getMovies());
}
