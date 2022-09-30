import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Routes>
      {/* Home Page  */}
      <Route path="/" element={<Home />} />
      {/* create new event Page  */}
      <Route path="/create" element={<CreateEvent />} />
      {/* event Page  */}
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
}

export default App;
