import "./header.scss";
import HomeIcon from "../../assets/home.svg";

const header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={HomeIcon} alt="" /> Skilcomm
      </div>
    </nav>
  );
};

export default header;
