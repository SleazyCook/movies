import { useState } from 'react'
import { auth } from '../../firebase'

import UserMenu from './UserMenu';

function UserButton(authUser) {
  const [menuVisible, setMenuVisible] = useState(false)
  const avatar = authUser.authUser.photoURL
  const username = authUser.authUser.displayName

  function handleMenuVisibility() {
    setMenuVisible(!menuVisible)
    console.log('icon clicked')
  }


  return (
    <div className='user-button' onClick={handleMenuVisibility}>
      {avatar ? 
        <img className='user-button__icon' src={avatar} /> 
        : 
        <img className='user-button__icon' src='https://i.imgur.com/SGTvQJ7.png' />}
        &nbsp;
      
        <div className='user-button__name'>
          {username ? <>{username}</> : <>user</>}
        </div>

      {menuVisible && <UserMenu />}
    </div>
  )
}

export default UserButton;