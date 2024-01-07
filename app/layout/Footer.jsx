"use client";
import React from "react";
import {Logo,  footergreenbulb,
  footerredbulb,
  company1,
  company2, } from  '../../public/images/index'
  import Image from 'next/image'
function Footer() {
  return (
    <div className="w-full bg-black dark:bg-orange-950">
      <div className="flex lg:justify-center mx-auto mb-5  lg:mb-[-60px] xs:w-[450px] lg:w-[auto] w-[312px] bg-black dark:bg-orange-950 ">
        <div className="grid lg:grid-cols-4 lg:gap-32 gap-10 grid-flow-row xs:ml-5 lg:ml-0 mt-4">
          <div>
            <div className="flex mb-6">
              <Image src={Logo} alt="logo" className="w-[24px] h-[24px]" />
              <p className="xs:text-[16px] text-[15px] font-normal text-white dark:text-white">
                Christmas
              </p>
            </div>
            <div>
              <p className="text-white text-[13px] xs:text-[14px] xs:w-[145px] w-[135px] dark:text-white">
                This Christmas gives you a lot of love
              </p>
            </div>
          </div>

          <div className="dark:text-white text-white ">
            <div className="mb-6">
              <p className="xs:text-[20px] text-[16px] font-semibold">
                Our Services
              </p>
            </div>
            <div>
              <p className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-white ">
                Pricing
              </p>
            </div>
            <div>
              <p className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-white ">
                Discount
              </p>
            </div>
            <div>
              <p className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-white ">
                Shipping Model
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row justify-center xs:flex-col lg:hidden block">
            <div className="absolute xs:ml-[90px] xs:mt-[-80px] ml-[180px] mt-[150px]">
              <Image
                src={footergreenbulb}
                alt="footergreenbulb"
                className="w-[120px] h-[132px]"
              />
            </div>
            <div className="absolute xs:ml-[165px] xs:mt-[500px] ml-[400px] mt-[450px]">
              <Image
                src={footerredbulb}
                alt="footerredbulb"
                className="w-[120px] h-[142px]"
              />
            </div>
          </div>

          <div className="dark:text-white text-white ">
            <div className="mb-6">
              <p className="xs:text-[20px] text-[16px] font-semibold">
                Support
              </p>
            </div>
            <div>
              <p className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-white ">
                FAQs
              </p>
            </div>
            <div>
              <p
                className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-
              white"
              >
                Support center
              </p>
            </div>
            <div>
              <p className="xs:text-[16px] text-[15px] font-normal mb-2 dark:text-white text-black ">
                Contact Us
              </p>
            </div>
          </div>

          <div className="dark:text-white text-white ">
            <div className="mb-6">
              <p className="xs:text-[20px] text-[16px] font-semibold">
                Available One
              </p>
            </div>
            <div>
              <Image
                src={company1}
                alt="GooglePlay"
                className="w-[100px] h-[30px] mb-2"
              />
            </div>
            <div>
              <Image
                src={company2}
                alt="Appleapp"
                className="w-[100px] h-[30px] mb-2"
              />
            </div>
          </div>

          <div className="flex lg:flex-row justify-center mb-10 xs:flex-col lg:visible invisible">
            <div className="absolute lg:mr-[120px] lg:mt-[-190px] ">
              <Image
                src={footergreenbulb}
                alt="footergreenbulb"
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="absolute lg:ml-[1850px] lg:mt-[-250px] ">
              <Image
                src={footerredbulb}
                alt="footerredbulb"
                className="min-w-[120px] h-[122px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
