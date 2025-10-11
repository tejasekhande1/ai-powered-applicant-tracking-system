import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">MatchMind.ai</p>
            </Link>

            <Link to="/upload">
                <span className="primary-button w-fit">Upload Resume</span>
            </Link>
        </nav>
    )
}

export default Navbar;