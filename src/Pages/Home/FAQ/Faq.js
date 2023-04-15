import React from 'react';

const Faq = () => {
    return (
        <section className="w-4/5 mx-auto my-20 py-5">
            <h1 className="text-3xl md:text-5xl text-blue-500 font-bold text-center mb-10">
                Frequently Asked Questions
            </h1>

            <div className="collapse collapse-arrow border bg-base-100 mb-3 border-blue-500 text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                    What types of courses do you offer?
                </div>
                <div className="collapse-content">
                    <p>
                        A short course on learn-tech normally lasts between 2 and 8 weeks. Some are aimed at
                        a beginner level, for newcomers to the subject, while others may be for existing
                        students or professionals and require prior knowledge.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-blue-500 text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                    When do I need to be online?
                </div>
                <div className="collapse-content">
                    <p>Once a course has started, you will be able to access the course material and study
                        at any time that suits you.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-blue-500 text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                    Are certificates free?
                </div>
                <div className="collapse-content">
                    <p> To get a certificate for a short course you can join for free, you will normally
                        need to pay to upgrade your course or become an Unlimited learner.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-blue-500 text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                    My Certificate hasn't arrived yet. What do I do?
                </div>
                <div className="collapse-content">
                    <p>If it's been more than six weeks since your digital certificate was issued and you
                        haven't received your printed certificate, you can get in touch to find out about
                        your order.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;