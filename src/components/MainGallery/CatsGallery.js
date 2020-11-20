import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagesCats from "./Images/ImagesCats";
import "./MainGalleryImages.css";

const CatsGallery = () => {
  const gutter = "20px";

  return (
    <div className="partOfgallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[0].src} alt="" />
          <img src={ImagesCats[2].src} alt="" />
          <img src={ImagesCats[1].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
        className="partOfgallery"
      >
        <Masonry gutter={gutter}>
          <img src={ImagesCats[5].src} alt="" />
          <img src={ImagesCats[4].src} alt="" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default CatsGallery;
