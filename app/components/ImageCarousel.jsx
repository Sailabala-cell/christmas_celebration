import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { New1, New2, New3, New4 } from "../../public/images/index";
import SingleCard from './SingleCard';
function ImageCarousel() {
    const responsive = {
      superlargedesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 475 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 475, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    const newGiftSectionData = [
      {
        id: 1,
        image: New1,
        altText: "Newone",
        price: "$45",
        title: "Snow Deer",
      },
      {
        id: 2,
        image: New2,
        altText: "Newtwo",
        price: "$32",
        title: "Snow Globe",
      },
      {
        id: 3,
        image: New3,
        altText: "Newthree",
        price: "$45",
        title: "Sledge",
      },
      {
        id: 4,
        image: New4,
        altText: "Newfour",
        price: "$30",
        title: "Christmas Wreath",
      },
     
    ];

    const arrayLength = newGiftSectionData.length;

    const sliderData = newGiftSectionData.map((item,index) => (
      <SingleCard 
        key={index}
        arrayLength={arrayLength}
        image={item.image}
        altText={item.altText}
        price={item.price}
        title={item.title}
      />
    ))
  return (
    <div className="flex justify-center items-center mb-32">
      <Carousel
        className="lg:w-[800px] xs:w-[500px] w-[300px]"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sliderData}
      </Carousel>
    </div>
  );
}

export default ImageCarousel
