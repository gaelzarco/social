import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/create-account'>Create Account</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}