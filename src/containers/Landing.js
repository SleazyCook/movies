import { useState, useEffect } from 'react'

import { fetchTrending } from '../api/movies'

import Header from '../layout/Header'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import AuthDetails from '../components/auth/AuthDetails'
import EditProfile from '../components/profile/EditProfile'
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

            <AuthDetails />

            <SignIn />
            <SignUp />

            <EditProfile />
            
            <Trending 
                trending={trending}/>

        </div>
    )
}

export default Landing;