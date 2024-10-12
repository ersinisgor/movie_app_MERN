import { fetchFromTMDB } from "../services/tmdb.services.js";

export async function getTrendingTvShow(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
    );

    const randomTvShow =
      data.results[Math.floor(Math.random() * data.results?.length)];

    return res.json({ success: true, content: randomTvShow });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getTvShowTrailers(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );

    return res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getTvShowDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    return res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getSimilarTvShows(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );

    return res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}

export async function getTvShowsByCategory(req, res) {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );

    return res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorText: error.message,
    });
  }
}