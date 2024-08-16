import "./header.scss";
import HomeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={HomeIcon} alt="" /> Skilcomm
      </div>
      <Link to="/login">
        <button className="action-button">Login/SignUp</button>
      </Link>
    </nav>
  );
};

export default header;
