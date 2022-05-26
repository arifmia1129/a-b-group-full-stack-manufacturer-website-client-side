import React from 'react';

const UserSubscribe = () => {

    return (
        <div className='my-10'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Subscribe:</h3>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <h3 className='font-bold text-primary text-xl mb-2 text-center'>Get in touch:</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-secondary text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSubscribe;