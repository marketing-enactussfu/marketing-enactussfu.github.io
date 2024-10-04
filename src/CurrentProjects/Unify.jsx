import React from "react";
import PageTemplate from '../components/PageTemplate';
import community from '../images/currentprojects/community.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";


const Unify = () => {
    const text = 'Our mission is to provide a supportive and comprehensive collective learning platform dedicated to immigrants and refugees';

    return <CurrentProjectsTemplate title = 'Unify' text= {text} pic = {community} />;
};

export default Unify;
