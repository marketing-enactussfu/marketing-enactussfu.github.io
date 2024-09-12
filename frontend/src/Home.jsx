import React from 'react';
import PageTemplate from './components/PageTemplate';
import { importAll } from './utilities/importImages'; 
import competitions from './images/home/competitions.png';

const competitionsContent = {
    title:'Join our team and turn your projects into award-winning initiatives.',
    text: "We participate in Enactus Canada’s Regional and National expositions to address pressing economic, social, and environmental needs. Whether you're competing as a presenter or a designer, you’ll have the chance to collaborate with peers, gain recognition, and receive awards for your participation. Your contribution plays a crucial role in our collective success, so join us to represent our team and make a difference in our community."
}


const Home = () =>{

    const images = importAll(require.context('./images/home/brands', false, /\.(png|jpe?g|svg)$/));

    const mainpage = (
        <main className = 'space-y-5'>


            {/*What We Do*/}
            <div>
                
            </div>

            {/* <div className = 'container flex space-x-4 items-center justify-center px-6'> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10">
                <div>
                    <div className = 'text-sm text-[#D00200] font-semibold'>Enactus Canada Competitions</div>
                    <div className = 'font-bold text-3xl'>{competitionsContent['title']}</div>
                    <div className = 'text-[#5C5C5C]'>{competitionsContent['text']}</div>
                    <button className = 'bg-[#D00200] text-white rounded-lg p-1'>Join Us</button>
                    <button className = 'bg-[#868686] text-white rounded-lg p-1'>Learn More</button>
                </div>
                <img src = {competitions} alt = 'competitions' className = 'object-cover'></img>
            </div>

            {/* brands */}
            <div className="container mx-auto py-12">
                <h2 className="text-center text-red-600 font-semibold mb-6 font-semibold">Our Partners</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
                {Object.keys(images)
                    .sort((a, b) => {
                        const numA = parseInt(a.match(/\d+/)[0], 10);
                        const numB = parseInt(b.match(/\d+/)[0], 10);
                        return numA - numB;
                    })
                    .map((key, index) => (
                        <div key={index}>
                        <img src={images[key]} alt="brand" className="h-16 object-contain" />
                        </div>
                ))}
                </div>
            </div>

             {/* Get Updates */}
            <div className="flex justify-center flex-col items-center py-6 gap-7">
                <div className = 'text-3xl font-bold'>Get Updates</div>
                <div className = 'text-[#5C5C5C]'>Sign up with your email address to receive the latest news and updates from Enactus SFU!</div>
                <form className="flex items-center rounded-full border border-gray-300 px-4 py-2 w-full max-w-lg">
                    <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-grow outline-none px-4 py-2 text-gray-600 placeholder-gray-400 rounded-full"
                    />
                    <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                    >
                    Subscribe
                    </button>
                </form>
            </div>
        
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )
}

export default Home;