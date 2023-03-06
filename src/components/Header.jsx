import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={{ backgroundColor: "blue", height: "75px" }}>
            <Link to="/"><i className="fa-solid fa-house text-light" style={{ width: "50px" }}></i></Link>
        </div>
    )
}

export default Header;