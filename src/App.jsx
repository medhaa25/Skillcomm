import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/herosection/hero";

import Details from "./components/Details/Details";
import ScheduleAppointment from "./components/Schedule/Schedule";
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/worker-details/:id" element={<Details />} />
          <Route
            path="/schedule-appointment/:id"
            element={<ScheduleAppointment />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
