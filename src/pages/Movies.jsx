import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${TMDB_BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR&page=1`
        );
        setMovies(response.data.results);
        setError(null);
      } catch (err) {
        setError("영화 정보를 불러오는데 실패했습니다.");
        console.error("Error fetching movies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="root">
        <div className="movies-container">
          <p>로딩중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="root">
        <div className="movies-container">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="root">
      <div className="movies-container">
        {movies.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        ))}
      </div>
    </div>
  );
}