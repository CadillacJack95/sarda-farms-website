import React from "react";

import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={footerStyles.container}>
        <div className={footerStyles.appContainer}>
          <p>Download our App</p>
          <div>
            <button className={footerStyles.downloadButton}>
              <img src="./assets/icons/apple.png" />
            </button>

            <button className={footerStyles.downloadButton}>
              <img src="./assets/icons/android.png" />
            </button>
          </div>
        </div>
        <div className={footerStyles.socialContainer}>
          <div>
            <button className={footerStyles.socialButton}>
              <img src="./assets/icons/facebook.png" />
            </button>
            <button className={footerStyles.socialButton}>
              <img src="./assets/icons/twitter.png" />
            </button>
            <button className={footerStyles.socialButton}>
              <img src="./assets/icons/instagram.png" />
            </button>
            <button className={footerStyles.socialButton}>
              <img src="./assets/icons/linkedin.png" />
            </button>
            <button className={footerStyles.socialButton}>
              <img src="./assets/icons/youtube.png" />
            </button>
          </div>
          <div>
            <p>Copyright © 2020 Sarda Farms Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
