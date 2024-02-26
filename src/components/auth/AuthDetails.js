import { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import Logout from './Logout'

function AuthDetails() {

    const [authUser, SetAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                SetAuthUser(user)
                console.log(user)
            } else {
                SetAuthUser(null)
            }
        })

        return () => {
            listen()
        }
    }, [])

    // function handleSignOut() {
    //     signOut(auth).then(() => {
    //         console.log('sign out successful.')
    //     }).catch(error => console.log('sign out unsuccessful', error))
    // }    

    return(
        <div>
            {authUser && <img src={authUser.photoURL} height="50"></img>}
            {authUser ? <>{authUser.displayName} Signed In
                {/* <button onClick={handleSignOut}>Sign Out</button> */}
                <Logout />
                </> : <>Signed Out</>}
        </div>
    )
}

export default AuthDetails