import React from 'react';
import { SiCountingworkspro } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
const BusinessSummary = () => {
    return (
        <div className='my-10'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Summary:</h3>
            <div className='grid'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat mx-auto flex justify-around items-center">
                        <div>
                            <div className="stat-title">Country</div>
                            <div className="stat-value">50+</div>
                            <div className="stat-desc">Latest: 01 May 2022</div>
                        </div>
                        <div>
                            <SiCountingworkspro className='text-3xl text-primary' />
                        </div>
                    </div>

                    <div className="stat mx-auto flex justify-around items-center">
                        <div>
                            <div className="stat-title">All User</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">Latest: 01 May 2022</div>
                        </div>
                        <div>
                            <AiOutlineUser className='text-3xl text-primary' />
                        </div>
                    </div>

                    <div className="stat mx-auto flex justify-around items-center">
                        <div>
                            <div className="stat-title">All Reviews</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">Latest: 01 May 2022</div>
                        </div>
                        <div>
                            <MdReviews className='text-3xl text-primary' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;