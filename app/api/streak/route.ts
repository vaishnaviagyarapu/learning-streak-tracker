import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    streak: 3,
    totalDays: 10,
    lastStudy: "2026-03-14"
  });
}