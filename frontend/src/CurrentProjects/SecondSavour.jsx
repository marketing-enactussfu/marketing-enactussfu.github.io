import React from "react";
import PageTemplate from '../components/PageTemplate';
import oranges from '../images/currentprojects/oranges.png'; 
import logo from '../images/currentprojects/logo.png'; 
import paperbags from '../images/currentprojects/paperbags.png'; 
import Subtitle from "../components/Subtitle";

const SecondSavour = () => {

    const Title = ({title})=>{
        return(
            <div className="text-[#181818] sm:text-3xl text-2xl font-semibold">
                {title}
           </div>
        )
    }
    
    const Text = ({text})=>{
        return (
            <div className="text-start text-[#5c5c5c] text-base sm:text-xl font-normal">
        
                {text}
            </div>

        )
    }
    const secondsavour = (
        <main className = 'mt-4'>
            {/* Header Section */}
            <div className = 'flex flex-col gap-10 sm:gap-12 md:gap-16'>
                    <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 bg-white flex flex-col items-center gap-5 pt-12">
                            <Subtitle text="Current Projects" />
                            <Title title="Second Savour" />
                            <div className="text-center text-[#5c5c5c] text-md sm:text-xl font-[400] currentProject-md:mx-20 currentProjectText-md:mx-10">
                                A social enterprise that aims to combat food waste originating from excess/surplus produce.
                            </div>
                            <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-6 gap-4">
                                <button className="session-button sm:text-[14px] text-[12px] font-semifold">
                                    Visit Website
                                </button>
                                <div className="facebook-button sm:text-[14px] text-[12px] font-semifold">
                                    Our Instagram
                                </div>
                            </div>
                    </div>

                    <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 items-center">
                            <img className="w-full rounded-xl" src={oranges} alt="Oranges" />
                    </div>


                   
                    <div className="flex flex-col justify-start items-start gap-4 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 ">
                                <Title title="Who We Are?" />
                                <Text text = "We are Second Savour, where purpose meets palate. As a student-led social enterprise, our mission is to rescue rejected produce surplus and transform it into nutritious, long-lasting food items. We're not just about sustenance; we're on a mission to raise awareness about sustainable food consumption, sparking a collective reevaluation of our consumption habits."/>
                                <Text text = "Our commitment is reflected in our three core pillars: First, we're environmentally conscious, crafting our products with meticulous care using sustainable resources. Second, we empower individuals by inspiring a rethinking of food waste, inviting them to be part of the solution. Finally, we repurpose damaged produce into upcycled food products, minimizing waste while shedding light on issues of hunger and inequality."/>
                    </div>

                    <div className = 'currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 '>
                           {/* Image Section 2: Logo (Moved Here) */}
                           <img className="w-full rounded-xl" src={logo} alt="Second Savour Logo" />


                    </div>

                     
                    {/* What We Do Section */}
                    <div className="flex flex-col justify-start items-start gap-4 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 ">
                        <Title title="What We Do?" />
                        <Text text = "Our target audience includes individuals and households committed to reducing food waste and environmentally conscious consumers seeking sustainable alternatives. Our comprehensive approach involves gathering, skillfully processing, and conscientiously packaging candies in 100% compostable materials, minimizing carbon emissions. Beyond our delicious products, we're dedicated to educating over 3000 individuals this year on the vital importance of reducing food waste and embracing sustainable choices, while our overarching goals focus on saving greenhouse gas emissions, reducing plastic use, and creating a positive impact on both the environment and society. Join us in savoring change and making a meaningful difference."/>
                    </div>


                    <div className = 'currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 '>
                        {/* Image Section 3: Paper Bags */}
                        <img className="w-full rounded-xl" src={paperbags} alt="Paper Bags" />

                    </div>

                    {/* Our Products Section */}
                    <div className="flex flex-col justify-start items-start gap-4 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 mb-20">
                        <Title title="Our Products" />
                        <Text text = "CitrusCandies, a product line within Second Savour, repurposes damaged citrus fruits from various sources into vitamin C-rich candy treats, providing a delicious and sustainable solution. Beyond crafting tasty treats, CitrusCandies is driven by the mission to promote a more sustainable food system by addressing the environmental, economic, and social costs of food waste. The project breakdown involves the Second Savour team developing and producing these upcycled products, selling them through various channels such as websites and pop-up booths, and actively engaging in educating communities and individuals about food waste and sustainable strategies through social media, newsletters, and additional pop-up booths. The overarching goal is to facilitate a positive environmental impact and inspire the emergence of the next generation of environmental business leaders." />
                    </div>
                         
                </div>


    
  
        </main>
    );

    return <PageTemplate component={secondsavour} />;
};

export default SecondSavour;
