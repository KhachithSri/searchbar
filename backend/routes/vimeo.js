import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Missing query" });

  try {
    const url = `https://api.vimeo.com/videos?query=${encodeURIComponent(query)}&per_page=50`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();

    if (data.error) {
      console.error("Vimeo API Error:", data.error);
      return res.status(500).json({ error: data.error, items: [] });
    }

    const items = (data.data || []).map((video) => ({
      id: video.uri.split("/").pop(),
      title: video.name,
      url: video.link,
      thumbnail: video.pictures?.sizes?.[3]?.link || video.pictures?.sizes?.[0]?.link || '',
      description: video.description || '',
    }));

    console.log(`Vimeo API returned ${items.length} results for query: "${query}"`);
    res.json({ items });
  } catch (err) {
    console.error("Vimeo API Error:", err);
    res.status(500).json({ error: "Vimeo API error", items: [] });
  }
});

export default router;
