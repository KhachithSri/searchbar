import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Missing query" });

  try {
    const url = `https://api.vimeo.com/videos?query=${encodeURIComponent(query)}&per_page=5`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();

    const items = data.data.map((video) => ({
      id: video.uri.split("/").pop(),
      title: video.name,
      url: video.link,
    }));

    res.json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Vimeo API error" });
  }
});

export default router;
