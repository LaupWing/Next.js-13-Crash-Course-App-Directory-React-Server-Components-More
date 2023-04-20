import { NextResponse } from "next/server"
import courses from "./data.json"
import { v4 as uuidv4 } from "uuid"

export async function GET(request) {
   return NextResponse.json(courses)
}

export async function POST(request) {
   const { title, description, level, link} = await request.json()
   
   return NextResponse.json({
      message: "Course created"
   })
}