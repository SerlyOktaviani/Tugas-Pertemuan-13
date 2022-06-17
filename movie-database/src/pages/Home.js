// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home({ movies }) {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */

  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      <Movies movies={movies}  />
          </>
  );
}

export default Home;
