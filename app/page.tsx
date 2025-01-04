import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [qualities, setQualities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchQualities = async () => {
    if (!videoUrl) {
      alert('Please enter a valid YouTube URL!');
      return;
    }

    setIsLoading(true);

    // Simulating quality fetch (replace with API call if needed)
    setTimeout(() => {
      setQualities(['144p', '360p', '720p', '1080p']);
      setIsLoading(false);
    }, 1000); // Simulated delay
  };

  const handleDownload = (quality: string) => {
    alert(`Download started for quality: ${quality}`); // Replace with actual API call
  };

  return (
    <div className="container">
      <h1 className="title">YouTube Downloader</h1>

      <input
        type="text"
        placeholder="Enter YouTube URL..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="input-box"
      />

      <button onClick={handleFetchQualities} className="fetch-button">
        {isLoading ? 'Loading...' : 'Fetch Qualities'}
      </button>

      <div className="qualities-container">
        {qualities.map((quality, index) => (
          <button
            key={index}
            className="quality-button"
            onClick={() => handleDownload(quality)}
          >
            {quality}
          </button>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          color: #fff;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .input-box {
          width: 70%;
          padding: 1rem;
          border: none;
          outline: none;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          backdrop-filter: blur(5px);
        }

        .fetch-button {
          padding: 0.8rem 2rem;
          font-size: 1rem;
          color: #fff;
          background: linear-gradient(145deg, #00c6ff, #0072ff);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          margin-bottom: 2rem;
          transition: transform 0.2s;
        }

        .fetch-button:hover {
          transform: scale(1.05);
        }

        .qualities-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .quality-button {
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          color: #fff;
          transition: transform 0.2s;
        }

        .quality-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
