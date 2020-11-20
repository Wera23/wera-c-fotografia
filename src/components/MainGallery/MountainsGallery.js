import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesMountains from "./Images/ImagesMountains";
import "./MainGalleryImages.css";

const MountainsGallery = () => {

  const gutter = "20px";
  return (
    <div className="partOfgallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[3].src} alt="" />
          <img src={ImagesMountains[5].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[0].src} alt="" />
          <img src={ImagesMountains[1].src} alt="" />
          <img src={ImagesMountains[4].src} alt="" />
          {/* <img src={ImagesMountains[2].src} alt="" /> */}
        </Masonry>
      </ResponsiveMasonry>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter="20px">
          <img src={ImagesMountains[6].src} alt="" />
          <img src={ImagesMountains[5].src} alt="" />
          <img src={ImagesMountains[7].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[8].src} alt="" />
          <img src={ImagesMountains[9].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[10].src} alt="" />
          <img src={ImagesMountains[13].src} alt="" />
          <img src={ImagesMountains[12].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>
      {/* 
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
        <Masonry gutter="20px">
          <img src={ImagesMountains[13].src} alt="" />
          <img src={ImagesMountains[14].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[25].src} alt="" />
          <img src={ImagesMountains[19].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[17].src} alt="" />
          <img src={ImagesMountains[16].src} alt="" />
          <img src={ImagesMountains[15].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[23].src} alt="" />
          <img src={ImagesMountains[24].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }} className="partOfgallery">
        <Masonry gutter={gutter}>
          <img src={ImagesMountains[20].src} alt="" />
          <img src={ImagesMountains[21].src} alt="" />
          <img src={ImagesMountains[22].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
        <Masonry gutter="20px">
          <img src={ImagesMountains[26].src} alt="" />
          <img src={ImagesMountains[28].src} alt="" />
        </Masonry>
      </ResponsiveMasonry> */}
    </div>
  );
};

export default MountainsGallery;
