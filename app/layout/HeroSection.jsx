"use client";
import React from "react";
import {HeroImage} from "../../public/images/index.js"
import Image from "next/image"
function HeroSection() {
  return (
    <div>
      <div className="flex justify-center lg:flex-row flex-col items-center text-center lg:text-start sm:mt-8 md:mt-20 ">
        <div>
          <Image
            src={HeroImage}
            alt="heroImage"
            className="xs:w-[550px] xs:h-[442px] w-[320px] h-[282px]"
          />
        </div>
        <div className="my-auto">
          <div className="justify-center flex lg:justify-start">
            <p className="text-[24px] xs:text-[42px] font-bold xs:w-[500px] w-[300px] leading-tight">
              Merry Christmas and Happpy New Year
            </p>
          </div>
          <div className="justify-center flex lg:justify-start">
            <p className="text-[13px] sm:text-[20px] font-normal sm:w-[300px] w-[300px] text-text-color mt-5 dark: text-text-color-dark ">
              Christmas and a new year is about to begin, all good wishes and
              successes.{" "}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div
              className="rounded-[64px] w-fit h-auto text-center bg-red-600 px-12 py-5 text-[15px] xs:text-[19px] font-medium
            text-white mt-10 cursor-pointer"
            >
              Get started
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
}

export default HeroSection;
