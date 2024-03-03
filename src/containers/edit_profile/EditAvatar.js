import { useState, useEffect, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getAuth, updateProfile } from "firebase/auth";


function EditAvatar({auth}) {

    // console.log('testing edit profile ', authUser)

    const [editAvatarURL, setEditAvatarURL] = useState('')
    const [avatarURL, setAvatarURL] = useState(auth.photoURL)

    const auth1 = useMemo(() => getAuth(), [getAuth])

    useEffect(() => {



        updateProfile(auth1.currentUser, {
            photoURL: avatarURL
            }).then(() => {
                console.log('avatar updated: ', auth.currentUser)
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