import { Link } from 'react-router-dom'
import AuthDetails from "../components/auth/AuthDetails";

import Logout from '../components/auth/Logout'

function Header({loggedIn}) {

    console.log('header check for log in', loggedIn)
    return (
        <div>
            Welcome to the Movie Website
            <br />
            Developed by Drewford

            <br />

            <Link to='/'>Home</Link> | &nbsp;


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

export default Header;