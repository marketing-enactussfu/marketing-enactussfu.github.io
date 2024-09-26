import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import MobileNav from './MobileNav.jsx';




const PageTemplate = ({component}) =>{
    return(
        <div>
            <div className="navbar-transition:hidden">
                <MobileNav />
            </div>
            
            <div className="hidden navbar-transition:flex flex-col">
                <Navbar />
            </div>
            
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