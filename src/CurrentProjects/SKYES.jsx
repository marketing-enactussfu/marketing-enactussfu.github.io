import React from "react";
import PageTemplate from '../components/PageTemplate';
import deskpic from '../images/currentprojects/deskppic.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";

const SKYES = () => {

    return <CurrentProjectsTemplate title="Skyes" text="Our mission is to empower the youth in Nepal, with essential business skills to help them thrive in their local communities." pic={deskpic} />;
};

export default SKYES;
