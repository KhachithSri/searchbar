import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div style={{ 
      padding: "2rem", 
      fontFamily: "sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#fff"
    }}>
      <h1 style={{ 
        fontSize: "2.5rem", 
        marginBottom: "0.5rem",
        color: "#333",
        borderBottom: "3px solid #4285f4",
        paddingBottom: "1rem"
      }}>
        E-VISTA Video Search
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Search across YouTube and Vimeo to find educational videos
      </p>
      <SearchBar />
    </div>
  );
}

export default App;
