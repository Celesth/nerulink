import ytdl from "ytdl-core";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { videoUrl } = await request.json();

  if (!videoUrl || !ytdl.validateURL(videoUrl)) {
    return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
  }

  const info = await ytdl.getInfo(videoUrl);
  const qualities = info.formats
    .filter((format) => format.qualityLabel)
    .map((format) => format.qualityLabel);

  return NextResponse.json({ qualities: [...new Set(qualities)] });
}
