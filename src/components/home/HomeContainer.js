import React from "react";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";

const HomeContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* header  */}
          <div className="col-lg-6">
            <HomeHeader />
          </div>
          {/* Content  */}
          <div className="col-lg-6">
            <main>
              <HomeContent />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
