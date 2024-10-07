import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar/>
      <Landing/>
      <Footer/>
    </> 
  )
}

export default App
