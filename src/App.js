import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/NavBar";

import Home from "./components/Home/Home";

import About from "./components/About/About";
import SingleVideo from "./components/Video/SingleVideo";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos/:videoId" element={<SingleVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
