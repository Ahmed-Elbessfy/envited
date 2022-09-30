import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="text-center text-lg-end mx-3">
      <h1>
        Imagine if <br />
        <span className="gradient-cl">Snapchat</span> <br /> had events.
      </h1>
      <p className="neut-dark-gray-cl">
        Easily host and share events with your friends <br /> across any social
        media.
      </p>
      {/* create event button  */}
      <Link
        to="/create"
        className="btn text-white mx-auto my-4 px-4 py-3 border-0 rounded-btn gradient-bg d-none d-lg-inline-block create_link"
      >
        🎉 Create my event
      </Link>
    </header>
  );
};

export default HomeHeader;
