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
    <div className="flex flex-col items-center gap-6">
      <input
        type="text"
        placeholder="Enter YouTube URL..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full max-w-xl p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
      />

      <button
        onClick={handleFetchQualities}
        className="px-6 py-3 text-lg font-medium rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-lg"
      >
        {isLoading ? "Loading..." : "Fetch Qualities"}
      </button>

      {qualities.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {qualities.map((quality, index) => (
            <button
              key={index}
              onClick={() => handleDownload(quality)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition shadow-md"
            >
              {quality}
            </button>
          ))}
        </div>
      )}
    </div>
  );
    }
