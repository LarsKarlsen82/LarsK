import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Learn from '../../Pages/Learn/Learn';
import CV from '../../Pages/CV/CV';
import NoPage from '../../Pages/NoPage/NoPage';
import Referencer from '../../Pages/Referencer/Referencer';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NoPage />} />
        <Route path="referencer" element={<Referencer />} />
      </Routes>
    </Router>
  );
};


export default AppRouter;
