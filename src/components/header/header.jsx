import "./header.scss";
import HomeIcon from "../../assets/home.svg";
const header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={HomeIcon} alt="" /> Skilcomm
      </div>
      <button className="action-button">Login/SignUp</button>
    </nav>
  );
};

export default header;
