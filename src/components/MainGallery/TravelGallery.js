import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import mainImagesPortugal from "./Images/MainImagesData";
import "./MainGalleryImages.css";

const TravelGallery = () => {
  const gutter = "10px";

  return (
    <div className="partOfgallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        {/* <Masonry gutter="20px">
          {mainImages.map((mainImage, key) => (
            <img src={mainImage.src} key={key} alt="aaa"  />
          ))}
        </Masonry> */}

        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[0].src} alt="" />
          <img src={mainImagesPortugal[1].src} alt="" />
          <img src={mainImagesPortugal[2].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[3].src} alt="" />
          <img src={mainImagesPortugal[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[6].src} alt="" />
          <img src={mainImagesPortugal[5].src} alt="" />
          <img src={mainImagesPortugal[7].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[8].src} alt="" />
          <img src={mainImagesPortugal[9].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[15].src} alt="" />
          {/* <img src={mainImagesPortugal[10].src} alt="" /> */}
          <img src={mainImagesPortugal[11].src} alt="" />
          <img src={mainImagesPortugal[12].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[19].src} alt="" />
          <img src={mainImagesPortugal[14].src} alt="" />
          {/* <img src={mainImagesPortugal[13].src} alt="" /> */}
        </Masonry>
      </ResponsiveMasonry>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[15].src} alt="" />
          <img src={mainImagesPortugal[16].src} alt="" />
          <img src={mainImagesPortugal[17].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery"> 
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[18].src} alt="" />
          <img src={mainImagesPortugal[20].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={mainImagesPortugal[20].src} alt="" />
          <img src={mainImagesPortugal[21].src} alt="" />
          <img src={mainImagesPortugal[22].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}
    </div>
  );
};

export default TravelGallery;
