import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Image1 from '../../assets/category/speaker.png';
import Image2 from '../../assets/category/vr.png'; 
import Image3 from '../../assets/category/gaming.png';

import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90 to-brandWhite/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Work</p>
                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl opacity '>Laptop</p>
                {/* Wrap the button with Link component */}
                <Link to="/h/blogs">
                  <Button text="Browse" bgColor="bg-white" textColor="text-black" />
                </Link>
              </div>
            </div>
            <img src={Image3} alt="" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
          </div>

          <div className=' py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4 '>
                <p className='mb-[2px] text-white-400'>Explore</p>
                <p className='text-2xl font-semibold mb-[2px]'>the</p>
                <p className='text-4xl xl:text-5xl'>Watches</p>
                {/* Wrap the button with Link component */}
                <Link to="/h/blogs">
                  <Button text="Browse" bgColor="bg-brandWhite" textColor="text-brandGreen" />
                </Link>
              </div>
            </div>
            <img src={Image2} alt="" className='w-[320px] absolute bottom-0 right-0' />
          </div>

          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                <p className='text-4xl xl:text-5xl'>Earphone</p>
                {/* Wrap the button with Link component */}
                <Link to="/h/blogs">
                  <Button text="Browse" bgColor="bg-brandWhite" textColor="text-brandBlue" />
                </Link>
              </div>
            </div>
            <img src={Image1} alt="" className='w-[320px] absolute bottom-0 right-0' />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Category;
