import React, { useState } from 'react';
import { TbAlarmMinusFilled } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { TbFileCertificate } from 'react-icons/tb';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';




const Summary = () => {
    const [counterOn, setCounterOn] = useState(false);

    const summary = [
        { _id: 1, icon: <IoIosPeople/>, countStart: '0', countEnd: '30', countSpan: 'K+', info: 'Students' },
        { _id: 2, icon: <TbFileCertificate />, countStart: '0', countEnd: '10', countSpan: 'K+', info: 'Certificates delivered' },
        { _id: 3, icon: <TbAlarmMinusFilled />, countStart: '0', countEnd: '450', countSpan: 'K+', info: 'Streamed minutes' },
        { _id: 4, icon: <FaTools />, countStart: '0', countEnd: '150', countSpan: '+', info: 'Programs available' },


    ]


    return (
        <div className='my-20'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='flex justify-center text-center'>
                    <div>

                        <h2 className='text-3xl font-bold text-blue-500 my-16  text-center'>OVERVIEW</h2>
                        {/* <h3 className='pt-4 pb-20 text-center text-xl'>TRY TO UNDERSTAND USERS EXPECTATION</h3> */}
                        <div className='lg:grid grid-cols-4 gap-5 justify-center'>
                            {
                                summary.map(summary => <div key={summary._id} className='mx-5 '>
                                    <h3 className='text-5xl text-blue-500 mx-20'>{summary.icon}</h3>
                                    <h4 className='text-3xl font-semibold my-2'>
                                        {counterOn && <CountUp start={summary.countStart} end={summary.countEnd} duration={2} delay={0} />
                                        }<span>{summary.countSpan}</span></h4>
                                    <p className='text-2xl font-semibold text-blue-500'>{summary.info}</p>
                                </div>)
                            }


                        </div>
                    </div>
                </div>
{/* 
                <div className='flex justify-center my-20 bg-red-300'>
                    <div className="card w-[800px] bg-blue-100 shadow-xl mx-5">

                    </div>
                </div> */}
            </ScrollTrigger>
        </div>


    );
};

export default Summary;