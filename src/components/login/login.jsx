import { useState } from "react";
import "./login.scss";
import HomeIcon from "../../assets/home.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, will be connected to backend later
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <span className="logo">
          Skilcomm <img src={HomeIcon} alt="" />
        </span>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup">
          Don&apos;t have an account? <span>Sign Up here.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
