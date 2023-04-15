import React from 'react';
//import About from '../About/About';
import Banner from '../Banner/Banner';

import Faq from '../FAQ/Faq';
import NewArrival from '../NewArrival/NewArrival';
import Peoples from '../Peoples/Peoples';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Summary></Summary>
         <NewArrival></NewArrival>
         
         <Faq></Faq>
           {/* <About></About> */}
           <Peoples></Peoples>
        </div>
    );
};

export default Home;