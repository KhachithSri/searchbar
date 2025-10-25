import { useState } from "react";
import { searchVideos } from "../api/videoSearch";
import VideoList from "./VideoList";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResults([{ id: "loading", title: "Searching...", url: "#", platform: "System" }]);

    const videos = await searchVideos(query);
    setResults(videos);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search educational videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "70%" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>Search</button>
      </form>

      <VideoList results={results} loading={loading} />
    </div>
  );
}
