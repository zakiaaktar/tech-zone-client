import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpeg'


const Banner = () => {
    return (
     

        <div className="carousel-item relative w-full sm:w-full lg:flex-row flex-col-reverse">
            <div className='carousel-img'>
                <img src={banner} alt=""
                    className="w-full" />
            </div>
            
            {/* <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 top-1/2">
                <p className='text-5xl font-bold text-orange-600'>Education Everywhere</p>
                <p className='text-xl'></p>
               
                

            </div> */}
           
        </div>






        
    );
};

export default Banner;