import React from "react";
import PageTemplate from '../components/PageTemplate';
import ecpic from '../images/currentprojects/challenges.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";

const EC = () => {
    const text = 'A 8-10 week collaborative program with the Charles Chang Institute of Entrepreneurship to enable students to unleash their entrepreneurial mindset.;'
    return <CurrentProjectsTemplate title="Entrepreneurship Catalyst" text={text} pic={ecpic} />;  

};

export default EC;
