import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from '../Shared/Button';

const Banner = ({ data }) => {
  return (
    <div className='container flex justify-center rounded-3xl w-full h-auto items-center py-12' style={{ backgroundColor: data.bgColor }}>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>

          {/* Left Column */}
          <div className='flex flex-col justify-start gap-4 p-6 sm:p-8'>
            <p className='text-sm'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
            <p className='text-sm'>{data.date}</p>
          </div>

          {/* Middle Column (Image) */}
          <div className='h-full flex items-center justify-center'>
            <img src={data.image} alt={data.title} className='w-[250px] md:w-[340px] drop-shadow-2xl object-cover' />
          </div>

          {/* Right Column */}
          <div className='flex flex-col justify-start gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{data.title2}</p>
            <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
            <div>
              {/* Wrap the button with Link component */}
              <Link to="/h/products">
                <Button text="Shop Now" bgColor="bg-white" textColor="text-primary" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
