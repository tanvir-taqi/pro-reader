import React from 'react';

const Contact = ({dark}) => {
    return (
        <div className=' py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        
        <div className={`tracking-wider py-6 mx-auto w-full md:w-1/2 bg-gray-200 ${dark ? 'bg-gray-900':'bg-blue-100'}  rounded-lg`}>
        <h1 className={`text-4xl font-semibold text-center text-gray-600`}>Contact Us</h1>
        <div className='flex flex-col mx-auto w-1/2 py-12'>
            <div className='mb-6 flex flex-col md:flex-row'>
                <label className={` text-gray-600 font-semibold md:p-4`}>Email:</label>
                <input className={`md:p-2 md:w-2/3 border ${dark ? 'bg-blue-100 text-gray-900' : 'bg-gray-100'} rounded-md`} type="email" name="email" id="" placeholder='Enter Your Email' />
            </div>
            <textarea className={`mb-10 md:p-6 border-2 ${dark ? 'bg-blue-100 text-gray-900' : 'bg-gray-100'} rounded-md`} placeholder='Write Your Message Here' name="" id="" cols="30" rows="10"></textarea>
            <button className={`border border-gray-600 rounded p-1 text-gray-500 hover:bg-gray-700 hover:text-gray-100 font-semibold`}>Send Message</button>
        </div>
        </div>
        
        </div>
    );
};

export default Contact;