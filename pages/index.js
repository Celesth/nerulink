import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownload = async () => {
    setMessage('');
    setDownloadUrl('');

    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setDownloadUrl(data.downloadUrl);
    } else {
      setMessage(data.error || 'Something went wrong');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>YouTube MP4 to MP3 Downloader</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={{ width: '300px', padding: '0.5rem' }}
      />
      <button onClick={handleDownload} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
        Download
      </button>

      {message && <p>{message}</p>}
      {downloadUrl && (
        <a href={downloadUrl} download>
          Download MP3
        </a>
      )}
    </div>
  );
}
