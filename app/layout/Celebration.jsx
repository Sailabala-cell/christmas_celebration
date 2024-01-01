"use client"
import React from 'react'
import { Celebrate } from "../../public/images/index";
import Image from "next/image";
function Celebration() {
  return (
    <div className='flex justify-center lg:flex-row flex-col items-center text-center lg:text-start mt-16 lg:xs:mt-20
    lg:mt-10'>
      <div className='my-auto sm:w-[400px]'>
        <div className="justify-center lg:justify-start flex">
          <p className="text-[20px] xs:text-[24px] font-semibold xs:w-[220px] w-[200px] leading-right">
            Celebrate with a lot of love
          </p>
        </div>
        <div className="justify-center lg:justify-start flex">
          <p
            className="text-[15px] xs:text-[16px] font-normal xs:w-[3300px] 
          lg:w-[350px] w-[315px] leading-right text-black dark:text-white mt-5"
          >
            In this holidays ,celebrate with much love and peace, offering many
            blessings to our loved ones, friends, and neighbours, wishing them a
            good Christmas message.
          </p>
        </div>
        <div className="justify-center items-center lg:justify-start flex">
          <div
            className="rounded-[64px] w-fit h-auto bg-red-500 px-12 py-4 text-[15px] xs:text-[16px]
            font-medium text-white mt-10 cursor-pointer"
          >
            Send Good Wishes
          </div>
        </div>
      </div>
      <div>
        <Image
          src={Celebrate}
          alt="Celebratesection"
          className="xs:w-[450px] xs:h-[450px] w-[280px] h-[280px]"
        />
      </div>
    </div>
  );
}

export default Celebration
