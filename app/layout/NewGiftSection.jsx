"use client";
import React from "react";
import SingleCard from "../components/SingleCard";
import ImageCarousel from "../components/ImageCarousel";
function NewGiftSection() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <p className="text-[24px] w-[200px] font-semibold text-center text-black dark:text-white">
          New Gifts
        </p>
      </div>
      <div className="flex mt-8">
        <ImageCarousel />
      </div>
      <div className=" justify-center flex mx-auto" id="good">
        <p className=" dark:text-white text-black xs:mx-5 justify-center text-center flex text-[20px] xs:text-[30px] font-semibold xs:w-[220px]  md:w-full ">
          You may send a nice message to your family & friends.
        </p>
      </div>
    </div>
  );
}

export default NewGiftSection;
