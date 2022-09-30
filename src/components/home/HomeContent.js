import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../../assets/Landing_page_image.svg";

const HomeContent = () => {
  return (
    <section className="d-flex justify-content-center flex-column">
      <img src={LandingImage} alt="envited app" />
      <Link
        to="/create"
        className="btn text-white mx-auto my-4 px-4 py-3 border-0 rounded-btn gradient-bg d-lg-none"
      >
        🎉 Create my event
      </Link>
    </section>
  );
};

export default HomeContent;
