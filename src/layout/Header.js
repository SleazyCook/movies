import AuthDetails from "../components/auth/AuthDetails";

function Header() {
    return (
        <div>
            Welcome to the Movie Website
            <br />
            Developed by Drewford

            <AuthDetails />
        </div>
    )
}

export default Header;