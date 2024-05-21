import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wirephone",
        title2: "Headphone",
        description: "Experience music like never before with the Beats Solo Wirephone Headphones. Featuring top-of-the-line sound quality, these headphones are designed to deliver crisp highs and deep lows. The ergonomic design ensures comfort for long listening sessions, making them perfect for music lovers and professionals alike.",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
        description: "Step into the future with the Beats Solo Wireless Virtual Reality Headset. This advanced VR headset offers an immersive experience with stunning visuals and seamless connectivity. Whether you're gaming, watching movies, or exploring new worlds, the Wireless Virtual will transport you to another dimension.",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
        description: "Discover the power and elegance of the Beats Solo Branded Laptops. These high-performance laptops are equipped with the latest processors, ample storage, and stunning displays. Ideal for both work and play, they offer a sleek design and robust performance to handle all your computing needs.",
    },
];

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="container bg-brandWhite rounded-3xl w-full h-[500px] ">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-cement">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col justify-center items-start p-4">
                                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                                        <h1 className="text-5xl sm:text:6xl lg:text-7xl font-bold">{data.title}</h1>
                                        <h1 className="text-5xl text-white uppercase dark:text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>

                                        {/* Wrap the button with Link component */}
                                        <Link to="/h/products">
                                            <Button text="Shop Now" bgColor="bg-primary" textColor="text-gray" className="text-5xl  font-bold"  />
                                        </Link>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={data.img}
                                            alt={data.title}
                                            className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,o.4)] relative z-40"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
