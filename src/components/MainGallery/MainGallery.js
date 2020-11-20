import React from "react";
import CatsGallery from "./CatsGallery";
import DogsSleedingGallery from "./DogsSleedingGallery";
import "./MainGalleryImages.css";
import MazuryGallery from "./MazuryGallery";

import MountainsGallery from "./MountainsGallery";
import PlacesGallery from "./PlacesGallery";
import TravelGallery from "./TravelGallery";

const Gallery = () => {
  return (
    <>
      <MountainsGallery />
      <PlacesGallery />
      <TravelGallery />
      <CatsGallery />
      <DogsSleedingGallery />
      <MazuryGallery />
    </>
  );
};

export default Gallery;
