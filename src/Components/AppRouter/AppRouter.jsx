import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Customers from '../../Pages/Customers/Customers';
import SignUp from '../../Pages/SignUp/SignUp';
import CV from '../../Pages/CV/CV';
import NoPage from '../../Pages/NoPage/NoPage';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};


export default AppRouter;
