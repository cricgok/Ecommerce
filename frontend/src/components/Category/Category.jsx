import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png'; 
import Image3 from '../../assets/category/macbook.png';

import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl'>Earphone</p>
                            {/* Replace anchor tag with Link component */}
                            <Link to="/h/blogs">
                              <Button text="Browse" bgColor="bg-white" textColor="text-black" />
                            </Link>
                        </div>
                    </div>
                    <img src={Image1} alt="" className='w-[320px] absolute bottom-0 right-0' />
                </div>

                <div className=' py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4 '>
                            <p className='mb-[2px] text-gray-400'>Explore</p>
                            <p className='text-2xl font-semibold mb-[2px]'>the</p>
                            <p className='text-4xl xl:text-5xl'>Watches</p>
                            {/* Replace anchor tag with Link component */}
                            <Link to="/h/blogs">
                              <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
                            </Link>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[320px] absolute bottom-0 right-0' />
                </div>

                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Work</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl opacity '>Laptop</p>
                            {/* Replace anchor tag with Link component */}
                            <Link to="/h/blogs">
                              <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </Link>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>

            </div>
        </div>
    </div>
  );
}

export default Category;
