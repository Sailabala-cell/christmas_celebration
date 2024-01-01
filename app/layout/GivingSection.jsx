"use client";
import React from "react";
import { Givingone,
 Givingtwo ,
 Givingthree , } from '../../public/images/index'
 import Image from "next/image";

 const GivingsectionData = [
   {
     id: "1",
     image: Givingone,
     altText: "Giving section image 1",
     title: "Cookies",
     description: "Colorful moments with delecious food",
   },
   {
     id: "2",
     image: Givingtwo,
     altText: "Giving section image 2",
     title: "Ornaments",
     description: "Give a moment to decorate",
   },
   ,
   {
     id: "3",
     image: Givingthree,
     altText: "Giving section image 3",
     title: "Lots of love",
     description: "Give away feelings that lasts forever",
   },
 ];

 function GivingSection() {

  return (
    <div>
      <div className="flex justify-center mt-24 flex-col items-center">
        <div>
          <p className="text-[24px] w-[200px] font-semibold text-center text-black dark:text-white ">
            Start giving this Christmas
          </p>
        </div>
        <div className="grid lg:mt-16 mt-8 grid-cols-2 lg:grid-cols-3">
          {GivingsectionData.map((Giving_section_data) => (
            <div
              key={Giving_section_data.id}
              className="text-center items-center flex justify-center flex-col lg:mx-12 md:mx-8 mx-5"
            >
              <div>
                <Image
                  src={Giving_section_data.image}
                  alt={Giving_section_data.altText}
                  className="xs:w-[120px] xs:h-[120px] w-[100px] h-[100px] m-5"
                />
              </div>
              <div>
                <p className="text-[16px] xs:text-[16px] font-semibold">
                  {Giving_section_data.title}
                </p>
              </div>
              <div>
                <p className="mt-1 text-[13px] xs:text-[14px] w-[150px] font-normal text-black dark:text-white">
                  {Giving_section_data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GivingSection;
