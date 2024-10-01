import React from "react";
import turbio from '../images/currentprojects/turbio.png'; 
import CurrentProjectsTemplate from "../components/CurrentProjectsTemplate";


const Turbio = () => {

    return <CurrentProjectsTemplate title="Turbio Energy" text="We aim to repurpose cooking oil to reduce environmental pollution, lower carbon emissions, and promote sustainable energy practices." pic={turbio} />;
};

export default Turbio;
