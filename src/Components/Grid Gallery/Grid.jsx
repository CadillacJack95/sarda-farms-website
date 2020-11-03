import React from "react";

import gridStyles from "./grid.module.css";
const Grid = () => {
  return (
    <>
      <div className={gridStyles.container}>
        <div className={gridStyles.milkImage}>
          <img src="./assets/images/milk-bottle.png" />

          <div className={gridStyles.milkImageOverlay}>
            <h2 className={gridStyles.milkImageTextOverlay}>Cow Milk</h2>
            <div className={gridStyles.milkImageButtonContainer}>
              <button className={gridStyles.milkImageButton}>Read More</button>
              <button className={gridStyles.milkImageButton}>
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className={gridStyles.cowImage}>
          <img src="./assets/images/landing_pic1.png" />
          <div className={gridStyles.cowImageOverlay}>
            <h2 className={gridStyles.cowImageTextOverlay}>
              What seperates us from the herd?
            </h2>
            <button className={gridStyles.cowImageButton}>Our Legacy</button>
          </div>
        </div>
        <div className={gridStyles.milkCartonImage}>
          <img src="./assets/images/landing_pic2.png" />
          <div className={gridStyles.subImageOverlay}>
            <h2 className={gridStyles.subImageTextOverlay}>
              Now, goodness comes in many forms.
            </h2>
            <button className={gridStyles.subImageButton}>Our Offerings</button>
          </div>
        </div>
        <div className={gridStyles.milkingImage}>
          <img src="./assets/images/landing_pic3.png" />
          <div className={gridStyles.subImageOverlay}>
            <h2 className={gridStyles.subImageTextOverlay}>
              Just as Mother nature intended it to be.
            </h2>
            <button className={gridStyles.subImageButton}>Our Offerings</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
