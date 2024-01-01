"use client";
import React from "react";
import { Message } from "../../public/images/index";
import Image from "next/image";
function Celebration() {
  return (
    <div class="flex justify-center mb-10">
      <div
        className=" bg-red-700 sm:w-[600px] flex justify-center lg:flex-row flex-col items-center text-center lg:mx-auto rounded-xl lg:text-start mt-16 lg:xs:mt-20
    lg:mt-10 lg:mb-10"
      >
        <div className="my-auto sm:w-[300px]">
          <div className="justify-center lg:justify-start flex">
            <p className="xs:mx-5 text-[20px] xs:text-[30px] font-semibold xs:w-[220px] w-[200px] leading-right">
              Send Good Wishes
            </p>
          </div>
          <div className="justify-center lg:justify-start flex">
            <div
              className="rounded-[64px]  h-auto xs:w-[320px] w-[200px] bg-red-800 border-2px xs:mx-5 mx-2 px-8 py-2 text-[15px] xs:text-[16px]
            font-medium text-white mt-2 cursor-pointer"
            >
              E-mail ID
            </div>
          </div>
          <div className="justify-center items-center lg:justify-start flex">
            <div
              className="rounded-[64px] xs:w-[100px] xs:h-[30px] bg-red-500 px-12 py-2 text-[15px] xs:text-[16px]
            font-medium text-white mt-2 cursor-pointer flex justify-center items-center xs:mx-5"
            >
              Send
            </div>
          </div>
        </div>
        <div className="sm:w-[350]">
          <Image
            src={Message}
            alt="Celebratesection"
            className="xs:w-[329px] xs:h-[250px] w-[300px] h-[280px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Celebration;
