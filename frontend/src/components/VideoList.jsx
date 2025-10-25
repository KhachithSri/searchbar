export default function VideoList({ results, loading }) {
  if (loading) return <p>Loading results...</p>;
  if (!results.length) return <p>No results found.</p>;

  return (
    <ul>
      {results.map((video) => (
        <li key={video.id} style={{ marginBottom: "0.5rem" }}>
          <a href={video.url} target="_blank" rel="noreferrer">
            {video.title} ({video.platform})
          </a>
        </li>
      ))}
    </ul>
  );
}
