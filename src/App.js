import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/NavBar";

import Home from "./components/Home/Home";

import About from "./components/About";

function App() {
  return (

    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
