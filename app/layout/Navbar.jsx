"use client";
import React, {useState, useEffect} from "react";
import { useTheme } from "next-themes";
import {BiMoon} from 'react-icons/bi';
import {FiSun} from 'react-icons/fi';
import { ThemeProvider } from "../components/ThemesProvider";
import {Logo, Navlight} from "../../public/images/index"
import { IoClose } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import Image from "next/image"
import { Link } from "react-scroll";
function Navbar() {
     const [mounted, setMounted] = useState(false);
     const { theme, setTheme } = useTheme();
     const [open,setOpen]=useState(false)
     console.log(theme)
    
     const Links = [
        {name : 'Home' , to : 'home'},
        {name: 'Celebrate' , to : 'celebrate'},
        {name : 'Gifts' , to : 'gifts'},
        {name : 'New' , to : 'new'}
     ]
     // useEffect only runs on the client, so now we can safely show the UI
     useEffect(() => {
       setMounted(true);
     }, []);

     if (!mounted) {
       return null;
     }
  return (
    <div className="w-full top-0 dark:bg-orange-950 bg-orange-800 ">
      <div className="h-[30px] my-0">
        <div
          className={`flex justify-between lg:mx-24 ${open ? "mx-0" : "mx-8"}`}
        >
          <div className="flex cursor-pointer">
            <Image src={Logo} alt="logo" className="w-[24px] h-[24px]" />
            <p className="md:text-[20px] text-[20px] font-normal text-white dark:text-white">
              Christmas
            </p>
          </div>
          <div className="flex">
            <div
              className="block my-auto md:invisible xs:visible mr-[15px] text-white dark:text-white"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <FiSun className="w-[20px] h-[20px]" />
              ) : (
                <BiMoon className="w-[20px] h-[20px]" />
              )}
            </div>

            <div
              className="cursor-pointer md:invisible xs:visible my-auto text-white dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IoClose className="w-[20px] h-[20px]" />
              ) : (
                <BsGrid className="w-[20px] h-[20px]" />
              )}
            </div>
          </div>
          <div
            className={`flex text-center items-center md:justify-between justify-center absolute 
          md:static md:w-auto w-[100%] lg:pl-0 sm:transition-all md:transition-none sm:duration-200 
          md:duration-0 sm:ease-in top-0 rounded-b-3xl md:rounded-none border-b-2 xs:border-gray-300 
          border-none shadow-xl md:shadow-none ${
            open ? "top-0" : "top-[-100%]"
          } dark:bg-orange-950 bg-orange-800 text-white`}
          >
            <div className="flex text-center">
              <div className="lg:invisible xs:visible">
                <div className="flex">
                  <div className="flex absolute left-0 md:invisible xs:visible">
                    <Image
                      src={Navlight}
                      alt="beautiful_bulbs"
                      className="w-[100px] h-[55px] ml-[-5px] mt-[-2px]"
                    />
                  </div>
                  <div className="flex absolute right-0 md:invisible xs:visible">
                    <div
                      className="cursor-pointer  mr-[15px] mt-[15px]"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <IoClose className="w-[20px] h-[20px]" /> : ""}
                    </div>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col md:flex-row">
                {Links.map((link, index) => (
                  <li key={index} className="md:mx-8 py-8 md:py-0">
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      className="md:text-[16px] 
                                text-[15px] cursor-pointer text-white dark:text-white"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="md:visible xs:invisible lg:my-auto text-white dark:text-white"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FiSun className="w-[20px] h-[20px] " />
                ) : (
                  <BiMoon className="w-[20px] h-[20px]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
