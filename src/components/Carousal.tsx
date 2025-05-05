import React from "react";

const Carousal = () => {
  return (
    <div className="carousel h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://developercommunity.blog/wp-content/uploads/2018/12/cropped-Developer-Community.png"
          className="w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Carousal;
