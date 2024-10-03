import React from "react";
import PageTemplate from '../components/PageTemplate';
import AA from '../images/currentprojects/AA.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";


const AApage = () => {
    
    const text = 'The Aqua Analyzer tests water quality by measuring three parameters: total dissolved solids, pH, and temperature';
    return <CurrentProjectsTemplate title="Aqua Analyzer" text={text} pic={AA} />;
};

export default AApage;
