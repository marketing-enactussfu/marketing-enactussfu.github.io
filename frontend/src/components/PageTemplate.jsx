import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';




const PageTemplate = ({component}) =>{
    return(
        <div>
            <Navbar />
            <div className="flex flex-col min-h-screen pt-16">

                <div className="flex-grow">
                    {component} 
                </div>
                <Footer />
            </div> 
            
        </div>
    )
}

export default PageTemplate;