import { React } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Outlet from './components/Outlet';

export default function App() {


  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}