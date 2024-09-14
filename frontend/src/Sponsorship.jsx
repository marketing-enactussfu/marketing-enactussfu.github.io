import React from 'react';
import PageTemplate from './components/PageTemplate';
import { importAll } from './utilities/importImages'; 
import PartnerForm from './components/PartnerForm';
import main from './images/sponsorship/main.png';

const Sponsorship = () =>{

    const brandImages = importAll(require.context('./images/sponsorship/brands', false, /\.(png|jpe?g|svg)$/));
    const forwardVisionImages = importAll(require.context('./images/sponsorship/forwardVisionBrands', false, /\.(png|jpe?g|svg)$/));
    const text = "“Davie Dosa Company is a Unique South Indian restaurant on Davie St, Vancouver. Since 2017, we bring an exotic culinary experience & delicious cocktails to the Davie Village neighborhood. We use locally sourced produces and products to create all of our chutneys and sauces from our scratch kitchen. Our own South Indian traditional Masala Dosas are re-invented and crafted according to our community tastebuds. We remind ourselves, our customers, and everyone we work with, that if we want environmental change, we have to collaborate and lead by example by energy savings and using eco-friendly products.”";

    const scrollToForm = () => {
        const formElement = document.getElementById('partner-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const mainpage = (
        <main className = 'mt-4'>
            <div className = 'flex flex-col gap-20 pt-12'>
                <div className = 'flex flex-col items-center gap-10'>
                    <div className='text-md text-[#D00200] font-semibold cursor-pointer'
                    >Sponsorship</div>
                    <div className = 'text-4xl font-semibold text-center'>Thank you to all our partners!</div>
                    <div className = 'flex flex-col gap-7 md:flex-row'>
                        <button onClick={scrollToForm} className="session-button">
                            Become a Sponsor
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>

                        </button>
                        <button 
                        className = 'sponsor-package-button'
                        >Sponsorship Package</button>
                    </div>
                </div>

                <div className='mx-20 border rounded-xl my-10 md:mx-40'>
                        <div 
                        // className = 'mx-20 text-center items-center flex flex-col py-20 md:mx-56 lg:mx-56 gap-10'
                         className = 'mx-5 text-center items-center flex flex-col md:mx-10 lg:mx-20 py-20 gap-10'
                        >
                            <img src={main} alt = 'brand'></img>
                            <p className = 'text-[#5C5C5C] text-md'>{text}</p>
                        </div>

                </div>

                <div className = 'flex flex-col gap-10 md:mx-40 mx-20'>
                    <div className = 'flex flex-col gap-10 items-center justify-center md:flex-row'>
                        <div className = 'justify-center'><img src = {brandImages['brand_5.png']} alt = 'brand' ></img></div>
                        <div className = 'justify-center'><img src = {brandImages['brand_8.png']} alt = 'brand'></img></div>
                    </div>
                    {/* For smaller screens (combine both into a single div) */}
                    <div className="grid grid-cols-2 md:hidden gap-5 items-center justify-center">
                    {/* First 5 images from the first div */}
                    <div className="justify-center"><img src={brandImages['brand_2.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_11.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_3.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_6.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_9.png']} alt="brand" /></div>
                    
                    {/* Next 4 images from the second div */}
                    <div className="justify-center"><img src={brandImages['brand_1.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_10.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_4.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_7.png']} alt="brand" /></div>
                    </div>

                    {/* For larger screens (split into two divs) */}
                    <div className="hidden md:grid grid-cols-5 gap-10 items-center justify-center">
                    {/* First 5 images */}
                    <div className="justify-center"><img src={brandImages['brand_2.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_11.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_3.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_6.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_9.png']} alt="brand" /></div>
                    </div>

                    <div className="hidden md:grid grid-cols-4 gap-10 items-center justify-center mx-10 md:mx-20">
                    {/* Next 4 images */}
                    <div className="justify-center"><img src={brandImages['brand_1.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_10.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_4.png']} alt="brand" /></div>
                    <div className="justify-center"><img src={brandImages['brand_7.png']} alt="brand" /></div>
                    </div>

                </div>


                <div className ='bg-[#FBFBFB] py-40 md:px-40 px-20'>

                    <div className = 'flex flex-col gap-10 items-center text-3xl font-semibold'>
                        <div className = 'text-center text-3xl'>Our partners for Forward Vision</div>

                        <div className='flex flex-wrap items-center justify-center'>
                            {Object.keys(forwardVisionImages)
                                .sort((a, b) => {
                                    const numA = parseInt(a.match(/\d+/)[0], 10);
                                    const numB = parseInt(b.match(/\d+/)[0], 10);
                                    return numA - numB;
                                })
                                .map((key, index) => (
                                    <div key={key} className="w-1/2 md:w-1/4 flex justify-center p-2"> 
                                        <img src={forwardVisionImages[key]} alt={key}/>
                                    </div>
                            ))}
                        </div>

                    </div>
                    </div>


                <div id="partner-form">
                    <PartnerForm />
                </div>
            </div>
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )

}

export default Sponsorship;