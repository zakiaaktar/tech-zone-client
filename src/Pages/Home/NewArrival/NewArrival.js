import React from 'react';

const NewArrival = () => {
    return (
        <section className="text-gray-800">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        {/* <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-500"> */}
                            <h3 className="text-3xl font-semibold">Whats New!!!</h3>
                            <span className="text-xl text-blue-500 font-bold tracking-wider uppercase">
                                in Tech Zone
                            </span>
                        {/* </div> */}
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="text-start col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-blue-800">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                                <h3 className="text-xl text-blue-500 font-bold tracking-wide">
                                AI for Business Crash Course
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase text-gray-400">
                                    April 2023
                                </time> */}
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit deserunt nihil tenetur inventore sequi aspernatur alias velit molestias, necessitatibus cum temporibus? Cum eum natus aliquam temporibus harum consectetur fuga minima necessitatibus! Modi, quisquam qui?
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                                <h3 className="text-xl font-bold text-blue-500 tracking-wide">
                                AI for Business Crash Course
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase text-gray-400">
                                    March 2023
                                </time> */}
                                <p className="mt-3">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus illum laudantium consequatur velit dicta nihil quisquam eaque odit unde error nulla fugiat repudiandae voluptates voluptate explicabo, asperiores neque. Corporis quo et id facere necessitatibus.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                                <h3 className="text-xl font-bold text-blue-500 tracking-wide">
                                AI for Business Crash Course
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase text-gray-400">
                                    March 2023
                                </time> */}
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit assumenda libero modi odio! Repudiandae, laudantium quia sit facilis neque veritatis vel obcaecati similique suscipit culpa quasi quibusdam corrupti labore, reprehenderit necessitatibus asperiores tempora aliquid.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;