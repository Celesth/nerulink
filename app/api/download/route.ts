import ytdl from "ytdl-core";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { videoUrl, quality } = await request.json();

  if (!videoUrl || !ytdl.validateURL(videoUrl)) {
    return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
  }

  const info = await ytdl.getInfo(videoUrl);
  const format = info.formats.find(
    (f) => f.qualityLabel === quality && f.container === "mp4"
  );

  if (!format) {
    return NextResponse.json({ error: "Quality not available" }, { status: 404 });
  }

  return NextResponse.json({ downloadLink: format.url });
}
