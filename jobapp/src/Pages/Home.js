import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from '../components/Form';
import Hero from "../components/Hero";



function Home() {
  return( 
  <>
  <Navbar/>
  <Hero/>
   <Form/>
   </>
  )
}

export default Home; 