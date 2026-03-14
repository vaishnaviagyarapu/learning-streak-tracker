
import { NextResponse } from "next/server"

export async function POST() {

  const today = new Date().toISOString().split("T")[0]

  return NextResponse.json({
    message: "Study recorded successfully!",
    date: today
  })

}