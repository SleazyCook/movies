import { Link } from 'react-router-dom'

import Logout from '../components/auth/Logout';
import Searchbar from '../components/Searchbar';

function Toolbar({loggedIn}) {

  const links = [
    {
      id: 1,
      path: '/',
      name: 'home'
    },
    {
      id: 2,
      path: 'movies',
      name: 'movies'
    },
    {
      id: 3,
      path: 'tv',
      name: 'tv'
    },
    {
      id: 4,
      path: 'editorials',
      name: 'editorials'
    }
  ]

  return(
    <div className='toolbar'>

      {links.map((linksObj) => {
        return(
          <Link className='toolbar__button' to={linksObj.path} key={linksObj.id}>
            {linksObj.name}
          </Link>
        )
      })}



      
      <Searchbar />

      {loggedIn ?
          <>
              <Link to='user'>My Profile</Link> | &nbsp;
              <Link to='edit'>Edit Profile</Link> | &nbsp;
              <Logout />
          </> :
          <Link to='authenticate'>Sign In</Link> 
      }
    </div>
  )
}

export default Toolbar;