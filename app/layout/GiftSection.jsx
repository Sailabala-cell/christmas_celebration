"use client";
import React,{useState} from "react";
import { Giftone,
  Gifttwo,
  Giftthree,
  Giftfour,
  Giftfive,} from "../../public/images/index"
  import Image from "next/image"
  import { FaRegHeart, FaHeart } from "react-icons/fa";

  const GiftSectionData = [
    {
      id: 1,
      image: Giftone,
      altText: "Giftone",
      price: "$15",
      title: "Gingerbread",
    },
    {
      id: 2,
      image: Gifttwo,
      altText: "Gifttwo",
      price: "$22",
      title: "Santa Claus Hat",
    },
    {
      id: 3,
      image: Giftthree,
      altText: "Giftthree",
      price: "$35",
      title: "Christmas Hat",
    },
    {
      id: 4,
      image: Giftfour,
      altText: "Giftfour",
      price: "$20",
      title: "Snowman",
    },
    {
      id: 5,
      image: Giftfive,
      altText: "Giftfive",
      price: "$25",
      title: "Candystick",
    },
  ];
function GiftSection() {
    const [fav, setFav] = useState(Array(GiftSectionData.length).fill(false))

    const handleClick = (index) => {
        const newFav = [...fav];
        newFav[index] = !newFav[index]
        setFav(newFav)
    }
  return (
    <div className="flex justify-center mt-24 flex-col items-center mb-5">
      <div>
        <p className="text-[24px] w-[200px] font-semibold text-center text-black dark:text-white">
          Share Gift
        </p>
      </div>
      <div className="grid lg:mt-8 mt-4 grid-cols-2 lg:grid-cols-3">
        {GiftSectionData.map((Gift_section_data, index) => (
          <div
            key={Gift_section_data.id}
            className="items-center flex flex-col xs:mx-5 xs:my-4 my-5 mx-5 xs:w-[200px] xs:h-[247px] w-[144px] h-[192px] rounded-xl 
        shadow-lg bg-white dark:dark:bg-orange-950"
          >
            <div className="mt-4">
              <div onClick={() => handleClick(index)}>
                {fav[index] ? (
                  <FaHeart className="w-[20px] h-[20px] text-red-600 float-right absolute xs:ml-[60px] xs:mt-[5px] ml-[40px] mt-[1px]" />
                ) : (
                  <FaRegHeart className="w-[20px] h-[20px] text-red-600 float-right absolute xs:ml-[60px] xs:mt-[5px] ml-[40px] mt-[1px]" />
                )}
              </div>
            </div>
            <div>
              <Image
                src={Gift_section_data.image}
                alt={Gift_section_data.altText}
                className="xs:w-[120px] xs:h-[120px ] w-[100px] h-[100px] m-5"
              />
            </div>
            <div className="xs:w-[160px] w-[120px] xs:mt-[-10px] mt-[-28px]">
              <div>
                <p className="text-[16px] xs:text-[20px] font-semibld dark:text-white text-black">
                  {Gift_section_data.price}
                </p>
              </div>
              <div>
                <p className="text-[13px] xs:text-[14px] font-normal text-black dark:text-white mt-1">
                  {Gift_section_data.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftSection;
