import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <h1>
                <Link to='/'>
                    <span className='header__primary'>film society</span>
                    <span className='header__secondary'>Developed by 
                        <span className='author'> Drewford</span></span>
                </Link>
            </h1>


        </div>
    )
}

export default Header;