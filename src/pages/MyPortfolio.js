import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content block lg:flex">

                <div className='flex-1'>
                    <h1 className="text-3xl font-bold">Md. Arif Mia</h1>
                    <h1 className="text-xl font-bold">MERN Stack Developer</h1>
                    <p className="py-6">
                        <span className='font-bold'>Expert:</span>
                        <br />
                        JavaScript, ES6, REST API, React, React Router, React Hook
                        <br />Form, HTML, CSS, Bootstrap, Tailwind
                        <br />
                        <span className='font-bold'>Comfortable:</span>
                        <br />
                        Node.js, MongoDB, Firebase, Express.js
                        <br />
                        <span className='font-bold'>Familiar:</span>
                        <br />
                        React Query, Programming C
                        <br />
                        <span className='font-bold'>Deploy:</span>
                        <br />
                        Netlify, Firebase, Heroku
                        <br />
                        <span className='font-bold'>Tools:</span>
                        <br />
                        Github, VS Code, Chrome Dev Tools, Photoshop, Figma
                        <br />
                        <span className='font-bold'>Personal Skills:</span>
                        <br />
                        Leadership, Organising
                        <br />


                    </p>
                    <a href='https://drive.google.com/file/d/1iySimMCWo6tw2m49vkY79J6CJBZS3pxh/view?usp=sharing' target="_blank" rel="noreferrer" className="btn btn-primary text-white">Resume!</a>
                </div>
                <div className='flex-1'>
                    <p>
                        <span className='font-bold'>EDUCATION:</span>

                        <br />
                        Vocational Teachers Training Institute, Bogra - Diploma In Computer Engineering
                        <br />
                        Duration - 4 years
                        <br />
                        August 2018 – Running [Last year (7th Semester)]

                    </p>
                    <ul>
                        <span className='font-bold'>Live site link:</span>

                        <li><a className='text-secondary' href="https://laptop-city-inventory.web.app/">Laptop-City</a> (full stack website)</li>
                        <li><a className='text-secondary' href="https://master-to-do.web.app/">Master-To-Do</a> (full stack website)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;