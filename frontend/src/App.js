import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sponsorship from './Sponsorship';
import WhatWeDo from './about/whatWeDo';
import OurTeam from './about/OurTeam';
import CoastCards from './pastProject/CoastCards';
import Competitions from './Competitions';  
import CountOnMe from './pastProject/CountonMe';
import ChangemakerChallenge from './pastProject/ChangemakerChallenge';
import BrightIdeas from './pastProject/BrightIdeas';
import BannerBag from './pastProject/BannerBag';
import Careers from './Careers';


export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsorship" element={<Sponsorship/>} />
        <Route path="/about/what-we-do" element={<WhatWeDo/>} />
        <Route path="/about/our-team" element={<OurTeam/>} />
        <Route path='/projects/past-projects/coast-cards' element={<CoastCards/>} />
        <Route path="/competitions" element={<Competitions/>} />
        <Route path='/projects/past-projects/count-on-me' element={<CountOnMe/>} />
        <Route path='/projects/past-projects/changemaker-challenge' element={<ChangemakerChallenge/>} />
        <Route path='/projects/past-projects/bright-ideas' element={<BrightIdeas/>} />
        <Route path='/projects/past-projects/banner-bag' element={<BannerBag/>} />
        <Route path="/Careers" element={<Careers/>} />

      
      </Routes>
    </Router>
  );
}

