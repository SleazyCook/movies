import { useState, useEffect } from 'react'

import { fetchTrending } from '../api/movies'

import Header from '../layout/Header'
import Trending from '../components/Trending'

function Landing() {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        (
            async () => {
                const trendingData = await fetchTrending()
                setTrending(trendingData.results)
            }
        )()
    }, [])

    return(
        <div>
            
            <Header />
            
            <Trending 
                trending={trending}/>

        </div>
    )
}

export default Landing;