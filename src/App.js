import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Routes>
      {/* Home Page  */}
      <Route path="/" element={<Home />} />
      {/* create new event Page  */}
      <Route path="/create" element={<CreateEventPage />} />
      {/* event Page  */}
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
}

export default App;
