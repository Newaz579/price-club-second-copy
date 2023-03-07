import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features: [
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will Never use Features',
            'Ajaira Features',
        ]
    },
        { id: 1, name: 'Medium', price: 9.99, features: [
            'Every things on Free',
            'Extra Features',
            'Unnecessary Features',
            'Will Never use Features',
            'Ajaira Features',
        ]
    },
        { id: 1, name: 'Premium', price: 19.99, features: [
            'Every things on medium',
            'Extra Features',
            'Unnecessary Features',
            'Will Never use Features',
            'Ajaira Features',
        ]
    },
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-400 text-white p-12'>Best Deal Of The Town.</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>

    );
};

export default Pricing;