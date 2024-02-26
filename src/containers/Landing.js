import { useState, useEffect } from 'react'
import { fetchTrending } from '../api/movies'

import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Profile from './Profile'
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
            
            <Trending 
                trending={trending}/>

        </div>
    )
}

export default Landing;