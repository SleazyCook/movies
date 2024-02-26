import { useOutletContext } from 'react-router-dom'
import { auth } from "../../firebase"
import { signOut } from 'firebase/auth'

function Logout() {
    
    function handleSignOut() {
        signOut(auth).then(() => {
            console.log('sign out successful.')
        }).catch(error => console.log('sign out unsuccessful.', error))
    }

    return (
        <button onClick={handleSignOut}>
            Logout
        </button>
    )
}

export default Logout