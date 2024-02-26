import { Link } from 'react-router-dom'

import MainLinks from './MainLinks';
import Searchbar from './Searchbar';
import UserButton from './UserButton';

function Toolbar({loggedIn, authUser}) {



  return(
    <div className='toolbar'>

      <div className='toolbar__left'>
        <MainLinks />

        <Searchbar />
      </div>



      {loggedIn ?
            <UserButton 
              authUser={authUser}/>
          :
            <Link to='authenticate'>Sign In</Link> 
      }
    </div>
  )
}

export default Toolbar;