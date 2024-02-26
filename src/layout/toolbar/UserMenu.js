import { Link } from 'react-router-dom'
import Logout from "../../components/auth/Logout";

function UserMenu() {

  const menu = [
    {
      id: 1,
      name: 'Profile',
      path: 'user'
    },
    {
      id: 2,
      name: 'Settings',
      path: 'edit'
    }
  ]

  return(
    <div className='user-menu'>
        {menu.map((menuObj) => {
          return(
            <Link className='user-menu__button' key={menuObj.id} to={menuObj.path}>
              {menuObj.name}
            </Link>
          )
        })}

        <Logout />
    </div>  
  )
}

export default UserMenu;