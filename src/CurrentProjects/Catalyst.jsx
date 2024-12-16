import React from "react";
import PageTemplate from '../components/PageTemplate';
import ecpic from '../images/currentprojects/challenges.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";

const Catalyst = () => {
    const text = 'In collaboration with the Charles Chang Institute for Entrepreneurship, Catalyst is an 8 week program providing an introduction to entrepreneurship for SFU students through development of innovative solutions to challenges posed by industry partners.'
    return <CurrentProjectsTemplate title="Catalyst" text={text} pic={ecpic} />;  

};

export default Catalyst;
