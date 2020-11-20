import React from "react";
import Header from "./components/Header/Header";

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  );
};

export default BaseLayout;
