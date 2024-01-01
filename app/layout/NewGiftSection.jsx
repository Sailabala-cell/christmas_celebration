"use client";
import React from "react";
import SingleCard from "../components/SingleCard";
import ImageCarousel from "../components/ImageCarousel";
function NewGiftSection() {
  return (
  <div className="flex justify-center items-center flex-col">
    <div>
      <p className="text-[24px] w-[200px] font-semibold text-center text-black dark:text-white">New Gifts</p>
    </div>
    <div className="flex mt-8">
        <ImageCarousel/>
    </div>
  </div>
  )
}

export default NewGiftSection;
