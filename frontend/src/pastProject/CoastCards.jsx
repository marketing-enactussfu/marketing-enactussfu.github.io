import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';

const CoastCard =() => {
    const generalImages = importAll(require.context('../images/pastProject/coastCard/general', false, /\.(png|jpe?g|svg)$/));
    const processImages = importAll(require.context('../images/pastProject/coastCard/processes', false, /\.(png|jpe?g|svg)$/));

    const mainpage = (
        <main className="mt-4">
            <div className="text-md text-[#D00200] font-semibold cursor-pointer">Enactus 2014-2016</div>

            <div className = 'mx-40'>
                <div className="text-3xl font-bold mb-4">Coast Cards</div>
                <img src= {generalImages['general_1.png']}></img>

            </div>

            <div>
            <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Process</div>
            <idv>The coasters are blended together with scrap paper and organic material to create our beautiful handmade greeting cards</idv>

            </div>
            







        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default CoastCard;
