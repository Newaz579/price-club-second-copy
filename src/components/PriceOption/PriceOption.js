import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;

    return (
        <div className='bg-indigo-400 m-3 rounded-md p-3'>
            <h3>
                <span className='text-6xl font-bold text-white'>{option.price}</span>
                <span className='text-3xl text-gray-50'>/month</span>
            </h3>
            <p className='text-3xl my-4'>{option.name}</p>
            {
                features.map((feature, idx) => <Feature feature={feature}></Feature>)
            }
            <button className='bg-green-400 mt-2 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;