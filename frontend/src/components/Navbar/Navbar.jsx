import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/h/#hero",
  },
  {
    id: 2,
    name: "Shop",
    link: "/h/products",
  },
  {
    id: 3,
    name: "About",
    link: "/h/#about",
  },
  {
    id: 4,
    name: "Blog",
    link: "/h/blogs",
  },
];

const Navbar = ({ darkMode, setDarkMode, userName }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    navigate(`/h/products?search=${searchTerm}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchButtonClick();
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className='container flex justify-between items-center'>
          <div className="flex items-center gap-4">
            <RouterLink to="/h" className="text-primary font-semibold tracking-widest text=2xl uppercase sm:text-3xl">Eshop</RouterLink>

            <div className="hidden lg:block">
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    {data.link.startsWith('/h') && data.link !== '/h/blogs' ? (
                      <RouterLink
                        to={data.link}
                        className="cursor-pointer inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      >
                        {data.name}
                      </RouterLink>
                    ) : (
                      <RouterLink to={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                        {data.name}
                      </RouterLink>
                    )}
                  </li>
                ))}
                <li>
                  <RouterLink to="/h/cart" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                    Cart
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-4">
              {/* Search Bar Section */}
              <form onSubmit={handleSearchSubmit} className="relative group hidden sm:block">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="search-bar border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  value={searchTerm}
                  onChange={handleSearchChange} 
                />
                <button type="submit">
                  <IoMdSearch 
                    className="text-xl text-gray-600 group-hover:text-pretty dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer"
                  />
                </button>
              </form>

              <div>
                <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
