import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' exact Component={Home}/>  
        </Routes>
     </Router>
     </>
  );
}

export default App;
