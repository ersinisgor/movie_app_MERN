import axios from "axios";
import { create } from "zustand";

export const useContentStore = create(set => ({
  contentType: "movie",
  movieGenres: [],

  setContentType: type => set({ contentType: type }),
  getMovieGenres: async () => {
    try {
      const response = await axios.get("/api/v1/movie/genres");

      set({ movieGenres: response.data.genres });
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  },
}));
