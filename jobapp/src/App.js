import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
    <Router>
      <Navbar/ >
        <Routes>
            <Route path='/' />  
        </Routes>
     </Router>
     </div>
  );
}

export default App;
