"use client";

import { useState } from "react";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [qualities, setQualities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchQualities = async () => {
    if (!videoUrl) {
      alert("Please enter a valid YouTube URL!");
      return;
    }

    setIsLoading(true);

    // Simulated fetch (replace with actual API call)
    setTimeout(() => {
      setQualities(["144p", "360p", "720p", "1080p"]);
      setIsLoading(false);
    }, 1000);
  };

  const handleDownload = (quality: string) => {
    alert(`Downloading in ${quality}`); // Replace with actual download logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="w-full max-w-md p-6 rounded-3xl shadow-lg bg-gray-800 bg-opacity-50 backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center mb-6">YouTube Downloader</h1>
        <input
          type="text"
          placeholder="Enter YouTube URL..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full p-4 mb-4 text-lg rounded-xl bg-gray-900 bg-opacity-50 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleFetchQualities}
          className="w-full px-4 py-3 text-lg font-medium text-center text-white rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
        >
          {isLoading ? "Loading..." : "Fetch Qualities"}
        </button>

        {qualities.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {qualities.map((quality, index) => (
              <button
                key={index}
                onClick={() => handleDownload(quality)}
                className="px-4 py-2 text-lg font-medium rounded-xl bg-gray-700 hover:bg-gray-600 transition duration-300 shadow-md"
              >
                {quality}
              </button>
            ))}
          </div>
        )}
      </div>
      <footer className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} YouTube Downloader. All rights reserved.
      </footer>
    </div>
  );
}
