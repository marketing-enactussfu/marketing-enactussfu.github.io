import React from "react";
import PageTemplate from '../components/PageTemplate';
import ecpic from '../images/currentprojects/challenges.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";

const Catalyst = () => {
    const text = 'A 8-10 week collaborative program with the Charles Chang Institute of Catalyst to enable students to unleash their catalyst mindset.;'
    return <CurrentProjectsTemplate title="Catalyst" text={text} pic={ecpic} />;  

};

export default Catalyst;
