import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  

  // Membuat state movies
  const [movies, setMovies] = useState([]);

  /**
   * Melakukan useEffect.
   * useEffect to perform other jobs: fetch data
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    const response = await axios(ENDPOINTS.POPULAR);

    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </>
  );
}

export default PopularMovie;
