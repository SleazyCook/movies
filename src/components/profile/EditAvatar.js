import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from "firebase/auth";

function EditAvatar() {

    const [editAvatarURL, setEditAvatarURL] = useState('')
    const [avatarURL, setAvatarURL] = useState('')

    useEffect(() => {

        const auth = getAuth();

        updateProfile(auth.currentUser, {
            photoURL: avatarURL
            }).then(() => {
                console.log('display name only, UPDATED', auth.currentUser)
            }).catch((error) => {
                console.log('could not update username', error)
            });

    }, [avatarURL])

    function handleEditAvatar(e) {
        e.preventDefault()
        setEditAvatarURL(e.target.value)
    }

    function handleAvatar(e) {
        e.preventDefault()
        setAvatarURL(editAvatarURL)
    }

    return(
      <form onSubmit={handleAvatar}>
          Update Avatar: <br />
          <input type='text' onChange={handleEditAvatar} placeholder='input img url' />
          <button type='submit'>Update</button>
      </form>
    )
}

export default EditAvatar;