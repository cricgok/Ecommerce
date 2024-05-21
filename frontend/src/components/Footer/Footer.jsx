import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterLinks = [
  {
    title: 'Home',
    link: '/h/#',
  },
  {
    title: 'About',
    link: '/h/#',
  },
  {
    title: 'Contact',
    link: '/h/#',
  },
  {
    title: 'Blog',
    link: '/h/#blog',
  },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          <div className='py-8 px-4'>
            <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>E-shop</a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
              Lorem Ipsum is Lorem Ipsum but was popularised as the Lorem Ipsum text. Lorem Ipsum is a Lorem Ipsum utility for creating beautiful text representations of Lorem Ipsum. Lorem Ipsum.
            </p>
            <p className='text-gray-500 mt-4'>Made With 💗 by Gokul</p>
          </div>

          <div className='py-8 px-4'>
            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
            <ul className='space-y-2'>
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='text-gray-600 hover:text-gray-400 hover:dark:text-white duration-300'>{data.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='py-8 px-4'>
            <h1 className='text-xl font-semibold sm:text-left mb-3'>Social Media</h1>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-600 hover:text-primary duration-300'><FaInstagram className='text-3xl' /></a>
              <a href='#' className='text-gray-600 hover:text-primary duration-300'><FaFacebook className='text-3xl' /></a>
              <a href='#' className='text-gray-600 hover:text-primary duration-300'><FaLinkedin className='text-3xl' /></a>
            </div>
          </div>
        </div>

        <div className='py-8 px-4'>
          <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
          <div className='flex items-center justify-between'>
            <div className='space-y-6'>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Chennai, TamilNadu</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMobileAlt />
                <p>+91 1234567890</p>
              </div>
            </div>
            <div>
              <p className='text-gray-500 mt-4'>© 2024 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
