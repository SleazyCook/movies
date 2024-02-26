import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from "firebase/auth";

function EditUsername() {
    
    const [editUsername, setEditUsername] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {

        const auth = getAuth();

        updateProfile(auth.currentUser, {
            displayName: username
            }).then(() => {
                console.log('display name only, UPDATED', auth.currentUser)
            }).catch((error) => {
                console.log('could not update username', error)
            });

    }, [username])

    function handleEditUsername(e) {
        e.preventDefault()
        setEditUsername(e.target.value)
    }

    function handleDisplayName(e) {
        e.preventDefault()
        setUsername(editUsername)
    }

    return(

        <form onSubmit={handleDisplayName}>
            <label>Change Display Name:</label>
            <br />
            <input type='text' onChange={handleEditUsername} placeholder='change display name' />
            <button type='submit'>Update</button>
        </form>

    )
}

export default EditUsername;