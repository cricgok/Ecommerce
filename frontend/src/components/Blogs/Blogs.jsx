import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect SmartWatch",
    subtitle: "In this comprehensive guide, we delve into the world of smartwatches, helping you navigate the complex landscape of features, brands, and functionalities. From fitness tracking to smart notifications, we cover everything you need to know to make an informed decision when selecting the perfect smartwatch for your lifestyle. Whether you're a fitness enthusiast, a tech-savvy professional, or simply looking to stay connected on the go, our expert advice and recommendations will ensure you find the ideal companion for your wrist. Join us on this journey as we explore the latest trends, compare top-rated models, and provide invaluable insights to help you make the right choice.",
    published: "Jan 20, 2024 By Gokul",
    image: Img1,
  },
  {
    title: "How to choose Perfect Gadgets",
    subtitle: "Discover the ultimate guide to selecting the perfect gadgets for your needs. From smartphones to laptops, cameras to headphones, we've got you covered with expert advice, in-depth reviews, and hands-on comparisons. Whether you're a tech enthusiast, a casual user, or somewhere in between, our comprehensive buying guide will help you navigate the ever-changing world of consumer electronics. Learn how to identify the features that matter most to you, compare different options, and make informed decisions that align with your preferences and budget. With our expert tips and recommendations, you'll be equipped to find the perfect gadgets to enhance your daily life and stay ahead of the curve.",
    published: "Jan 26, 2024 By Sanjay",
    image: Img2,
  },
  {
    title: "How to choose perfect VR headsets",
    subtitle: "Embark on a journey into the exciting world of virtual reality with our comprehensive guide to choosing the perfect VR headset. Whether you're a gaming enthusiast, a creative professional, or simply curious about the latest technology trends, our expert insights and recommendations will help you find the ideal VR experience for your needs. From immersive gaming to virtual tours, educational experiences to productivity tools, we explore the diverse applications of VR technology and provide valuable tips for selecting the right headset for your preferences and budget. Join us as we dive deep into the world of virtual reality and discover the endless possibilities that await.",
    published: "Feb 20, 2024 By Ajay",
    image: Img3,
  },
];

const Blogs = () => {
  return (
    <div>
      <div className='container'>
        <br />
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {BlogData.map((data) => (
            <div key={data.title} className='bg-white dark:bg-gray-900'>
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img src={data.image} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
              </div>
              <div>
                <h1 className='space-y-2'>{data.title}</h1>
                <h1 className='text-xs text-gray-500'>{data.published}</h1>
                <h1 className='font-bold line-clamp-1'>{data.title}</h1>
                <h1 className='line-clamp-16'>{data.subtitle}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs;
