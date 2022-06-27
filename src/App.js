import React from "react";
import Home from "./Home";
import Book from "./Book";
import About from "./About";
import Nav from "./Nav";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;