import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  async function getNowPlayingMovie() {
  
  const response = await axios(ENDPOINTS.NOW_PLAYING);
  setMovies(response.data.results);
}

  return (
    <>
    <Hero />
    <Movies title="Now Playing" movies={movies}/>
    </>
  );
}

export default NowPlayingMovie;
