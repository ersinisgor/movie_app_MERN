import axios from "axios";
import { create } from "zustand";

export const useContentStore = create(set => ({
  contentType: "movie",
  movieGenres: [],
  tvShowGenres: [],
  setContentType: type => set({ contentType: type }),
  getMovieGenres: async () => {
    try {
      const response = await axios.get("/api/v1/movie/genres");

      const updatedGenres = response.data.genres.map(genre =>
        genre.name === "Science Fiction" ? { ...genre, name: "Sci-Fi" } : genre
      );

      set({ movieGenres: updatedGenres });
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  },
  getTvShowGenres: async () => {
    try {
      const response = await axios.get("/api/v1/tv-show/genres");

      set({ tvShowGenres: response.data.genres });
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  },
}));
