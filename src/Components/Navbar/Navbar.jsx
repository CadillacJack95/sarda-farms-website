import React from "react";

import navbarStyles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={navbarStyles.navbar}>
        <div className={navbarStyles.container}>
          <div className={navbarStyles.link}>
            <a href="#">Home</a>
          </div>
          <div className={navbarStyles.logoContainer}>
            <img src="./assets/logos/logo.png" />
          </div>
          <div className={navbarStyles.link}>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
