import { useEffect } from "react";
import { useContentStore } from "../store/content";

const useGetMovieGenres = () => {
  const { movieGenres, getMovieGenres } = useContentStore();

  useEffect(() => {
    // Fetch genres only if not already fetched
    if (movieGenres.length === 0) {
      getMovieGenres();
    }
  }, [movieGenres, getMovieGenres]);

  return { movieGenres };
};

export default useGetMovieGenres;
