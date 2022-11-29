import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import { Home } from './components/paginas/home/Home';
import { About } from './components/paginas/about/About';

function App() {
  const nome = 'Arthur';
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
