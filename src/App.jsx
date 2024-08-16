import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/herosection/hero";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
