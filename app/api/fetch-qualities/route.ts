import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const videoUrl = body.url;

  if (!videoUrl) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  // Simulate fetching video qualities
  return NextResponse.json({ qualities: ["144p", "360p", "720p", "1080p"] });
}
