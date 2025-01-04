import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { videoUrl } = req.body;

    if (!videoUrl || !ytdl.validateURL(videoUrl)) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    try {
      const videoId = ytdl.getURLVideoID(videoUrl);
      const outputPath = path.resolve(`./public/downloads/${videoId}.mp3`);

      // Stream video and convert to MP3
      const stream = ytdl(videoUrl, { quality: 'highestaudio' });
      const ffmpegProcess = ffmpeg(stream)
        .audioCodec('libmp3lame')
        .save(outputPath);

      ffmpegProcess.on('end', () => {
        res.status(200).json({
          message: 'Conversion complete!',
          downloadUrl: `/downloads/${videoId}.mp3`,
        });
      });

      ffmpegProcess.on('error', (err) => {
        console.error(err);
        res.status(500).json({ error: 'Conversion failed' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
