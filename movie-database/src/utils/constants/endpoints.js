// Membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// Membuat variable URL API: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3";

// Membuat Variable Endpoints (object)
const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  // Tambahkan Endpoints lain
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `${BASE_URL}/move/top_rated?api_key=${API_KEY}`,
  DETAIL: `${BASE_URL}/movie/id/recommendations?api_key=${API_KEY}`,
  RECOMENDATION:`${BASE_URL}/movie/recommendations?api_key=${API_KEY}`,
  HERO:`${BASE_URL}/movie/day?api_key=${API_KEY}`
};

export default ENDPOINTS;
