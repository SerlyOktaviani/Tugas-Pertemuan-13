import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRated();
  }, []);

  async function getTopRated() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    
    const response = await axios(ENDPOINTS.TOP_RATED);

    /**
     * Simpan data movies dari axios ke state movies.
     * Upadte state menggunakan setMovies().
     */
    setMovies(response.data.results);
  }

  return (
    <>
    <Hero />
    <Movies title="Top Rated" movies={movies}/>
    </>
  );
}

export default TopRatedMovie;
