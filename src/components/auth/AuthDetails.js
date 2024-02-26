import { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

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

    function handleSignOut() {
        signOut(auth).then(() => {
            console.log('sign out successful.')
        }).catch(error => console.log('sign out unsuccessful', error))
    }    

    return(
        <div>
            {authUser ? <>{authUser.email} Signed In
                <button onClick={handleSignOut}>Sign Out</button>
                </> : <>Signed Out</>}
        </div>
    )
}

export default AuthDetails