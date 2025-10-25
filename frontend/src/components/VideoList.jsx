export default function VideoList({ results, loading }) {
  if (loading) return <p style={{ fontSize: "1.1rem", color: "#555" }}>Loading results...</p>;
  if (!results.length) return <p style={{ fontSize: "1.1rem", color: "#888" }}>No results found. Try a different search term.</p>;

  // Group results by platform
  const youtubeResults = results.filter(v => v.platform === "YouTube");
  const vimeoResults = results.filter(v => v.platform === "Vimeo");

  return (
    <div>
      <div style={{ marginBottom: "1rem", fontSize: "1.1rem", fontWeight: "bold" }}>
        Found {results.length} total results ({youtubeResults.length} YouTube, {vimeoResults.length} Vimeo)
      </div>

      {youtubeResults.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#FF0000", borderBottom: "2px solid #FF0000", paddingBottom: "0.5rem" }}>
            YouTube Results ({youtubeResults.length})
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {youtubeResults.map((video, index) => (
              <li key={video.id} style={{ 
                marginBottom: "1rem", 
                padding: "1rem", 
                border: "1px solid #ddd", 
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.3rem" }}>
                  #{index + 1}
                </div>
                <a href={video.url} target="_blank" rel="noreferrer" style={{
                  fontSize: "1.1rem",
                  color: "#1a0dab",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  {video.title}
                </a>
                <div style={{ fontSize: "0.85rem", color: "#006621", marginTop: "0.3rem" }}>
                  {video.url}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {vimeoResults.length > 0 && (
        <div>
          <h3 style={{ color: "#1AB7EA", borderBottom: "2px solid #1AB7EA", paddingBottom: "0.5rem" }}>
            Vimeo Results ({vimeoResults.length})
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {vimeoResults.map((video, index) => (
              <li key={video.id} style={{ 
                marginBottom: "1rem", 
                padding: "1rem", 
                border: "1px solid #ddd", 
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.3rem" }}>
                  #{index + 1}
                </div>
                <a href={video.url} target="_blank" rel="noreferrer" style={{
                  fontSize: "1.1rem",
                  color: "#1a0dab",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  {video.title}
                </a>
                <div style={{ fontSize: "0.85rem", color: "#006621", marginTop: "0.3rem" }}>
                  {video.url}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
