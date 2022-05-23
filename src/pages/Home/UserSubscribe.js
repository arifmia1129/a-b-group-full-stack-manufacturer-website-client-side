import React from 'react';

const UserSubscribe = () => {

    return (
        <div className='my-10'>
            <h3 className='font-bold text-primary text-2xl mb-2'>Subscribe:</h3>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <h3 className='font-bold text-primary text-xl mb-2 text-center'>Get in touch:</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="phone" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <textarea class="textarea textarea-bordered" placeholder="message"></textarea>
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-secondary text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSubscribe;