import { useState, useEffect } from 'react'

import { fetchMovieData, fetchTrending } from '../api/movies'

function Landing() {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        (
            async () => {
                // const result = await fetchMovieData()
                const trendingData = await fetchTrending()
                setTrending(trendingData.results)
                
            }
        )()
    }, [])

    return(
        <div>
            Welcome to my Website
            <div className='trending'>
            {trending && trending.map((trend)=>{
                return (
                    <div className='trending__card'>
                        <img height='250' src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} />
                        <span>{trend.title}</span>
                        <span>{trend.release_date.slice(0, 4)}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Landing;