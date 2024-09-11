import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}
