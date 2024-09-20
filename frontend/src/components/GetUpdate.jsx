import React from 'react';

function GetUpdate() {
    
    return(
        <div className='py-10 bg-[#FBFBFB] w-screen'>
        <div className="flex justify-center flex-col items-center py-6 gap-7 lg:mx-40 md:mx-28 sm:mx-16">
            <div className='font-semibold text-2xl md:text-3xl'>Get Updates</div>
            <div className='text-base sm:text-md text-[#5C5C5C] text-center justify-center home-subscribe-sm:w-2/5 sm:w-3/5 w-4/5'>
            Sign up with your email address to receive the latest news and updates from Enactus SFU!
            </div>

            <form className="flex flex-row items-center justify-between rounded-full border border-gray-300 px-4 py-2 w-2/5 sm:w-3/5 w-4/5 max-w-lg">
                <input
                type="email"
                placeholder="Email Address"
                className="flex-grow outline-none px-4 py-2 text-gray-600 placeholder-gray-400 placeholder-text-xs sm:placeholder-text-sm home-subscribe-sm:w-full w-2/5 rounded-full"
                />
                <button
                type="submit"
                className="hidden home-subscribe-sm:flex bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                >
                Subscribe
                </button>
            </form>
                <button
                type="submit"
                className="home-subscribe-sm:hidden bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-700 transition"
                >
                Subscribe
                </button>
        </div>
        </div>
        
    )
}

export default GetUpdate;



