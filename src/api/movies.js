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
        // .then(response => console.log('response: ', response))
        .catch(err => console.error(err));
};

// Trending Data 
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
            // .then(response => response.json())
            // .then(response => console.log('trending now: ', response))
            // .catch(err => console.error(err));
            const trendingData = await response.json()
            return trendingData

    } catch (error) {
        console.log('error fetching trending data', error)
    }
}