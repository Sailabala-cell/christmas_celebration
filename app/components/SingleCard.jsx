"use client"
import React, { useState } from "react";
import Image from "next/image"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { New1,
  New2,
  New3,
  New4,} from "../../public/images/index"
const SingleCard = (props) => {
    const [isLiked , setIsliked] = useState(false)
     const handleClick = ()=>
     {
        setIsliked((previslisted )=> !previslisted);
     }
  return (
    <div>
      <div className="flex justify-center">
        <div className=" mb-2 max-w-[230px] h-[278px] rounded-xl shadow-lg bg-white dark:bg-orange-950 ">
          <div
            className="bg-red-500 w-[230px] h-[180px] flex items-center justify-center rounded-bl-[100px] 
          rounded-br-[100px] rounded-t-xl"
          >
            <Image
              src={props.image}
              alt={props.altText}
              className="w-[150px] h-[150px]"
            />
          </div>
          <div className="text-center mt-5">
            <div>
              <p className="text-[20px] font-semibold dark:text-white text-black">
                {props.price}
              </p>
            </div>
            <div>
              <p className="text-[15px] font-normal dark:text-white text-black">
                {props.title}
              </p>
            </div>
          </div>
          <div className="float-right mt-[-3px]">
            <div
              className="w-[28px] h-[28px]
          bg-red-500 flex justify-center items-center rounded-br-xl cursor-pointer"
              onClick={handleClick}
            >
              {isLiked ? (
                <FaRegHeart className="w-[20px] h-[20px] text-white" />
              ) : (
                <FaHeart className="w-[20px] h-[20px] text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard