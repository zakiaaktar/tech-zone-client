import React from 'react';
import code1 from '../../../assets/images/code1.png';
import code2 from '../../../assets/images/code2.png';
import code3 from '../../../assets/images/code3.png';

const About = () => {
    return (
        <div>
            <div className="mt-14 lg:gap-10 md:gap-5 gap-12  grid lg:grid-cols-3 md:grid-cols-3 mx-10 lg:mx-auto  ">
                <div className="">
                    <img src={code1} alt=""  />
                </div>
                <div className="">
                    <img src={code2} alt="" className="rounded-3xl" />
                </div>
                <div className="">
                    <img src={code3} alt="" className="rounded-3xl" />
                </div>
            </div>
        </div>
    );
};

export default About;