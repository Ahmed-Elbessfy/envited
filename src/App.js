import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      {/* Home Page  */}
      <Route path="/" element={<Home />} />
      {/* create new event Page  */}
      <Route path="/create" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;
