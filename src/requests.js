const API_KEY = "0f93174d0b86f73e07966af083a74891";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&woth_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&woth_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&woth_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&woth_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&woth_genres=99`,

}

export default requests;