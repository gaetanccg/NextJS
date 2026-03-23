import { NextResponse } from "next/server";
import { createClient } from "@/prismicio";

export async function GET() {
  const client = createClient();

  try {
    const tags = await client.getTags();
    return NextResponse.json(tags);
  } catch {
    return NextResponse.json([]);
  }
}
