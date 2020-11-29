import React from "react";
//import Header from "./components/Header/Header";

import "./BaseLayout.css";

const BaseLayout = ({ children }) => {
  return (
    <div className="page">
        <ul className="menu">
          <li>
            <a className="menuLink" href="/">Strona główna</a>
          </li>
          <li>
            <a className="menuLink" href="/projects">Tematy</a>
          </li>
          <li>
            <a className="menuLink" href="/info">Informacja</a>
          </li>
        </ul>
      <div className="pageTitle">Wera Chodanionek</div>
      {/* <Header /> */}
      {children}

      <p className="footerText">Wera Chodanionek Fotografia | 2020</p>
    </div>
  );
};

export default BaseLayout;
