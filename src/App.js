import { Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Home Page  */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
