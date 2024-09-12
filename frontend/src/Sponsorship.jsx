import React from 'react';
import PageTemplate from './components/PageTemplate';
import { importAll } from './utilities/importImages'; 
import brand_1 from './images/home/brands/brand_1.png';
import brand_2 from './images/home/brands/brand_2.png';
import brand_3 from './images/home/brands/brand_3.png';

const Sponsorship = () =>{

    const text = "“Davie Dosa Company is a Unique South Indian restaurant on Davie St, Vancouver. Since 2017, we bring an exotic culinary experience & delicious cocktails to the Davie Village neighborhood. We use locally sourced produces and products to create all of our chutneys and sauces from our scratch kitchen. Our own South Indian traditional Masala Dosas are re-invented and crafted according to our community tastebuds. We remind ourselves, our customers, and everyone we work with, that if we want environmental change, we have to collaborate and lead by example by energy savings and using eco-friendly products.”";


    const mainpage = (
        <main>
            <div className = 'flex flex-col items-center gap-3'>
                <div className='text-sm text-[#D00200] font-semibold'>Sponsorship</div>
                <div className = 'text-xl font-semibold'>Thank you to all our partners!</div>
                <div className = 'flex flex-row gap-2'>
                    <button className = 'bg-[#868686] text-white rounded-full p-2'>Learn More</button>
                    <button className = 'bg-[#D00200] text-white rounded-full p-2'>Join Us</button>
                </div>
            </div>


            <div className='flex flex-col gap-2 items-center'>
                <img src={brand_1} alt = 'brand'></img>
                <div className = 'flex'>
                    <p>{text}</p>
                </div>
            </div>
            
            <div className = 'flex flex-row gap-2 items-center'>
                <div className = ''>
                    <img src = {brand_2} alt = 'brand'></img>
                </div>

                <div>
                    <img src = {brand_3} alt = 'brand'></img>
                </div>

            </div>

            <div>
                <div className='text-sm text-[#D00200] font-semibold'>Sponsorship</div>
                <div>Become a Partner</div>
                <form>
                    <label>If you would like to partner with us, fill out the form below and one of our staff members will get back to you.</label>
                    
                    
                    
                
                </form>
            </div>

            
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )

}

export default Sponsorship;
