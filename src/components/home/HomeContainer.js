import React from "react";
import HomeHeader from "./HomeHeader";

const HomeContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* header  */}
          <div className="col-lg-6">
            <HomeHeader />
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
