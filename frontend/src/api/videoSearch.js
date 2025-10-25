// Aggregates results from multiple sources with optimistic fallback
export async function searchVideos(query) {
  const sources = [
    fetch(`http://localhost:5000/api/youtube?q=${encodeURIComponent(query)}`).then(r => r.json()),
    fetch(`http://localhost:5000/api/vimeo?q=${encodeURIComponent(query)}`).then(r => r.json())
  ];

  const results = await Promise.allSettled(sources);

  const merged = results.flatMap((res, idx) => {
    if (res.status === "fulfilled" && res.value.items) {
      return res.value.items.map(item => ({
        id: item.id || item.videoId || Math.random().toString(36).slice(2),
        title: item.title || item.snippet?.title || "Untitled",
        url: item.url || `https://youtube.com/watch?v=${item.videoId}`,
        platform: idx === 0 ? "YouTube" : "Vimeo"
      }));
    }
    return [];
  });

  return merged;
}
