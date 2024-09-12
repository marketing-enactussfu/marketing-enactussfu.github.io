import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';

export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}