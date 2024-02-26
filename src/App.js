import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

import './styles/style.css'

import Header from './layout/Header';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                // console.log(user)
                setLoggedIn(true)
            } else {
                setAuthUser(null)
                setLoggedIn(false)
            }
        })

        return () => {
            listen()
        }
    }, [authUser]) 

    return(
        <div>
            <Header 
                loggedIn={loggedIn}/>

            <Outlet context={{
                authenticationObj: [loggedIn, setLoggedIn]
                }}/>
        </div>
    )
}

export default App;