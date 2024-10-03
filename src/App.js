import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sponsorship from './Sponsorship';
import WhatWeDo from './about/whatWeDo';
import OurTeam from './about/OurTeam';
import CoastCards from './pastProject/CoastCards';
import Competitions from './Competitions';  
import CountOnMe from './pastProject/CountOnMe';
import ChangemakerChallenge from './pastProject/ChangemakerChallenge';
import BrightIdeas from './pastProject/BrightIdeas';
import Careers from './Careers';//:D
import BannerBags from './pastProject/BannerBags';
import MediaMinds from './pastProject/MediaMinds';
import ReFresh from './pastProject/ReFresh';
import KindredKnots from './pastProject/KindredKnots';
import SecondSavour from './CurrentProjects/SecondSavour';
import SKYES from './CurrentProjects/SKYES';
import AA from './CurrentProjects/AA';
import CommunityGrafts from './CurrentProjects/CommunityGrafts';
import EntrepreneurshipChallenges from './CurrentProjects/EntrepreneurshipChallenges';
import TurbioEnergy from './CurrentProjects/TurbioEnergy';
import Events from './event/Events';
import PMSeries from './event/PMSeries';
import ForwardVision from './event/ForwardVision';
import BeeKind from './CurrentProjects/beekind';




export default function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/enactussfu" element={<Home />} />
        <Route path="/enactussfu/sponsorship" element={<Sponsorship/>} />
        <Route path="/enactussfu/about/what-we-do" element={<WhatWeDo/>} />
        <Route path="/enactussfu/about/our-team" element={<OurTeam/>} />
        <Route path='/enactussfu/projects/past-projects/coast-cards' element={<CoastCards/>} />
        <Route path="/enactussfu/competitions" element={<Competitions/>} />
        <Route path='/enactussfu/projects/past-projects/count-on-me' element={<CountOnMe/>} />
        <Route path='/enactussfu/projects/past-projects/changemaker-challenge' element={<ChangemakerChallenge/>} />
        <Route path='/enactussfu/projects/past-projects/bright-ideas' element={<BrightIdeas/>} />
        <Route path='/enactussfu/projects/current-projects/second-savour' element={<SecondSavour/>} />
        <Route path="/enactussfu/career" element={<Careers/>} />
        <Route path='/enactussfu/projects/past-projects/banner-bags' element={<BannerBags/>} />
        <Route path='/enactussfu/projects/past-projects/media-minds' element={<MediaMinds/>} />
        <Route path='/enactussfu/projects/past-projects/refresh' element={<ReFresh/>} />
        <Route path='/enactussfu/projects/past-projects/kindred-knots' element={<KindredKnots/>} />
        <Route path='/enactussfu/projects/current-projects/himalayan-skyes' element={<SKYES/>} />
        <Route path='/enactussfu/projects/current-projects/community-grafts' element={<CommunityGrafts/>} />
        <Route path='/enactussfu/projects/current-projects/entrepreneurship-challenges' element={<EntrepreneurshipChallenges/>} />
        <Route path='/enactussfu/projects/current-projects/turbio-energy' element={<TurbioEnergy/>} />
        <Route path='/enactussfu/projects/current-projects/aqua-analyzer' element={<AA/>} />
        <Route path='/enactussfu/events' element={<Events/>} />
        <Route path='/enactussfu/events/pm-series' element={<PMSeries/>} />
        <Route path='/enactussfu/events/forward-vision' element={<ForwardVision/>} />
        <Route path='/enactussfu/projects/current-projects/the-beekind-company' element={<BeeKind/>} />



      </Routes>
    </Router>
  );
}

