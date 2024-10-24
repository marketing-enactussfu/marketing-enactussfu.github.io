import React from "react";
import PageTemplate from '../components/PageTemplate';
import candle from '../images/currentprojects/candel.png'; 
import candle2 from '../images/currentprojects/candle2.png'; 
import communityicon from '../images/currentprojects/communityicon.png'; 
import leaf from '../images/currentprojects/environment.png'; 
import pollen from '../images/currentprojects/pollination.png'; 
import candelone from '../images/currentprojects/candelone.png'; 
import candeltwo from '../images/currentprojects/candeltwo.png'; 
import candelthree from '../images/currentprojects/candelthree.png'; 
import candelfour from '../images/currentprojects/candelfour.png'; 
import { importAll } from '../utilities/importImages'; 

const BeeKind = () => {
  const processesImage = importAll(require.context('../images/currentprojects/processes', false, /\.(png|jpe?g|svg)$/));
  const processesList = ['Grate', 'Boil', 'Filter', 'Render'];

  const beekindpage = (
    <main className = 'mt-4'>
      <div className = 'flex flex-col md:gap-20 gap-12'>
          {/* <div className="lg:mx-auto currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10"> */}
          <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10">
            <div className=" max-w-5xl flex flex-col justify-start items-center gap-8  pt-12">
              <div className="text-center text-[#d00200] text-base md:text-lg font-semibold">Current Projects</div>
              <div className="text-center text-[#181818] text-3xl sm:text-4xl font-semibold">The BeeKind Company</div>

              <div className="text-center text-[#5c5c5c] text-lg md:text-xl font-normal leading-relaxed">
                We aim to repurpose damaged honeycombs into sustainable candles, educating minds, and sowing seeds for bee pollination.
              </div>

              <div className="flex justify-center items-center gap-4 md:gap-6 flex sm:flex-row flex-col">
                <button className="session-button text-[14px] font-semibold"onClick = {()=> window.open('https://thebeekind.company', '_blank')} >
                    Visit Website
                </button>
                <button className="facebook-button text-[14px] font-semibold" onClick = {()=> window.open('https://www.instagram.com/thebeekind.company/', '_blank')}> 
                  Our Instagram
                </button>
              </div>
            </div>
            </div>

            <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10">
            <img className="w-full h-full object-cover rounded-xl" src={candle} alt="BeeKind Candle" />
            </div>

            {/* <div className="flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10 md:mb-32 sm:mb-20 mb-10"> */}
            {/* <div className="lg:mx-auto lg:max-w-5xl currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 flex flex-col gap-10"> */}
            <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10">
              <div className="w-full max-w-5xl flex flex-col justify-start items-start gap-6">
                <div className="text-[#181818] text-[24px] md:text-[32px] font-semibold">
                  We are more than just a candle company.
                </div>
                <div className="text-[#5c5c5c] text-lg md:text-xl font-normal leading-relaxed">
                    BeeKind Co. is a movement dedicated to illuminating spaces while fostering environmental awareness. Founded by a passionate team of young entrepreneurs from SFU, BeeKind Co. is a social enterprise driven to repurpose waste and reshape public perceptions.
                    <br/><br/>
                    Our mission is to create sustainable candles using beeswax as a renewable resource, providing environmentally-friendly alternatives to conventional paraffin-based candles.
                </div>
              </div>
          
              <img className="w-full h-full object-cover rounded-xl justify-center " src={candle2} alt="BeeKind Candle" />
     
              <div className="w-full max-w-5xl flex flex-col justify-start items-start gap-8">
                <div className="text-[#181818] text-[24px] md:text-[32px] font-semibold">
                  Every candle includes pollinator seeds to promote bee habitat preservation.
                </div>
                <div className="text-[#5c5c5c] text-lg md:text-xl font-normal leading-relaxed">
                  Inspired by British Columbia's wildlife, each scent captivates the senses. Experience the pure elegance of our hand-poured candles made from a sustainable blend of 100% Canadian beeswax and coconut oil. Encased in recyclable glass jars, these candles offer a clean burn with a wooden wick, surpassing traditional cotton alternatives. Illuminate your space with our 9 oz candles, providing 40 hours of environmentally conscious bliss.
                </div>
              </div>
            </div>



            <div className = 'bg-[#fbfbfb] py-10'>
            <div className="lg:mx-auto lg:max-w-5xl md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex flex-col items-center gap-8">
            {/* <div className="w-full h-auto px-4 md:px-12 lg:px-24 py-12 lg:py-24 bg-[#fbfbfb] flex flex-col justify-start items-center gap-12 lg:gap-24 mx-auto"> */}
              <div className="w-full max-w-5xl flex flex-col justify-start items-center gap-8">
                <div className="text-center text-[#d00200] text-sm font-semibold">Our Pillars</div>
                <div className="text-center text-[#181818] text-[24px] md:text-[32px] font-medium">Illuminate. Educate. Empower.</div>
              </div>
              <div className="grid grid-cols-1 home-competitions-md:grid-cols-3  gap-8 lg:gap-24">
                <div className="flex flex-col justify-start items-center gap-4 text-center">
                  <div className="w-8 h-8 relative rounded-full">
                <img className="object-cover" src={leaf} alt="leaf" />
                  </div>
                  <div className="text-[#181818] text-sm font-semibold">Environmentally Conscious</div>
                  <div className="text-[#5c5c5c] text-sm leading-relaxed">
                    We craft our candles using ethically sourced materials – damaged honeycombs. By repurposing these honeycombs, we not only reduce waste but also guide consumers toward eco-conscious choices.
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-4 text-center">
                  <div className="w-9 h-9 relative rounded-full">
                <img className="object-cover" src={communityicon} alt="communityicon" />

                  </div>
                  <div className="text-[#181818] text-sm font-semibold">Community Empowerment</div>
                  <div className="text-[#5c5c5c] text-sm leading-relaxed">
                    We empower students through BeeSquared workshops that educate the youth regarding sustainable practices, pollinator habitats, and the vital role of bees.
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-4 text-center">
              <div className="w-8 h-9 relative rounded-full">
                <img className="object-cover" src={pollen} alt="Pollen" />
              </div>
              <div className="text-[#181818] text-sm font-semibold">Pollination with a Purpose</div>
              <div className="text-[#5c5c5c] text-sm leading-relaxed">
                For every candle sold, BeeKind Co. plants one pollinator seed. These seeds contribute to bee-friendly habitats, supporting the conservation of pollinators.
              </div>
            </div>

              </div>
            </div>
            </div>

            {/* <div className="lg:mx-auto lg:max-w-5xl navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10"> */}
            {/* <div className="w-full h-auto px-4 md:px-12 lg:px-24 py-12 lg:py-24 bg-white flex flex-col justify-start items-center gap-12 lg:gap-24 mx-auto"> */}
            <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10">
            <div className="w-full max-w-5xl flex flex-col justify-start items-start gap-10">
            <div className="flex justify-between items-center w-full">
              <div className="text-[#181818] sm:text-3xl  text-2xl font-semibold">Our Candles</div>
              <button className="session-button sm:text-sm text-xs font-semibold">
                  Shop Now
              </button>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="relative w-full h-fill lg:h-fill rounded-xl">
                <img className="w-full h-auto object-cover" src={candelone} alt="BeeKind Candle" />

                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-[#181818] text-base font-semibold">Dahlia & Vine</div>
                  <div className="text-[#5c5c5c] text-base leading-snug">
                    A complex earthy scent that’s well-rounded with top notes of fresh pine and fir needle, and middle notes of clean camphor and fir balsam; all sitting on base notes of musk, moss, and cedarwood.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-start items-start gap-8">
              <div className="relative w-full h-fill lg:h-fill rounded-xl">
                <img className="w-full h-auto object-cover" src={candeltwo} alt="BeeKind Candle" />

                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-[#181818] text-base font-semibold">Balsam & Cedar</div>
                  <div className="text-[#5c5c5c] text-base leading-snug">
                    This scent is composed of a sweet bouquet of red vine, soft apricot, dark dahlia and blue-violet, on base notes of cedarwood, patchouli leaves, and caramel.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-start items-start gap-8">
              <div className="relative w-full h-fill lg:h-fill rounded-xl">
                <img className="w-full h-auto object-cover" src={candelthree} alt="BeeKind Candle" />

                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-[#181818] text-base font-semibold">Eucalyptus</div>
                  <div className="text-[#5c5c5c] text-base leading-snug">
                    A fresh and enticing blend of eucalyptus leaves and peach, with middle notes of sea salt, thyme and elemi, and finished with base notes of clean woods and patchouli.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-start items-start gap-8">
              <div className="relative w-full h-fill lg:h-fill rounded-xl">
                <img className="w-full h-auto object-cover" src={candelfour} alt="BeeKind Candle" />

                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-[#181818] text-base font-semibold">Evergreen Berry</div>
                  <div className="text-[#5c5c5c] text-base leading-snug">
                    On a base note of pine sap, this scent is a walk into a winter wonderland, with top notes of eucalyptus leaves, mint sprigs and sea salt, and middle notes of beautiful snow-capped evergreen and juniper berries.
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>

            {/* <div className = 'lg:mx-auto lg:max-w-5xl md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex flex-col gap-8'> */}
            <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10">
              <div className="text-[#181818] sm:text-3xl text-2xl font-semibold">Our Process</div>
              <div className="flex flex-col bg-white">
                                  <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                                      <div className="flex flex-nowrap ml-0">
                                      {processesList.map((process, index) => (
                                          <div key={index} className="inline-block px-3">
                                          <div
                                              className=" learn-more-button w-60 sm:w-80 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between">
                                              <img 
                                              src= {processesImage[process + '.png']}
                                              alt = {process}
                                              className="w-auto object-cover h-80 p-1 rounded-lg" 
                                              />
                                              <div className="p-4 flex flex-col flex-grow items-center">
                                              <div className="font-semibold text-[12px] sm:text-[18px] mb-2">{process}</div>
                                              </div>
                                          </div>
                                          </div>
                                      ))}
                                  </div>
                  </div>
              </div>

            </div>
            {/* <div className="flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-32 sm:gap-20 gap-10 md:mb-32 sm:mb-20 mb-10"> */}
            <div className="lg:mx-auto lg:max-w-5xl flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-25 sm:gap-10 gap-10 mb-20">
        
            {/* <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 mb-20 flex-col flex item-center"> */}

            <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-6 text-center">
            <div className="text-[#181818] sm:text-4xl text-3xl font-semibold">Shop with Purpose</div>
            <div className="text-[#5c5c5c] text-lg md:text-xl font-normal leading-relaxed">
              Every candle you purchase is a step toward environmental conservation. Experience the magic of candlelight while being a part of something greater – a movement that believes in the power of small actions to create significant impact.
            </div>
              <button className="session-button sm:text-sm text-xs font-semibold">
                    Shop Now
              </button>
           
            </div>
            </div>


      </div>


    </main>
  );

  return <PageTemplate component={beekindpage} />;
};

export default BeeKind;
