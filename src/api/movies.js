// testing with basic authentication

export async function fetchMovieData() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
        }
    }
    fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .catch(err => console.error(err));
};

// Trending Data (By Week)
export async function fetchTrending(){
    try {

        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
            }
        };
        
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
            const trendingData = await response.json()
            return trendingData

    } catch (error) {
        console.log('ERROR FETCHING TRENDING MOVIES', error)
    }
}