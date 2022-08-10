import React from "react";
import About from "./About";

function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="img mt-5 overflow-hidden ">
          <h1 className="text-white text-center fw-bold title">
            Welcome to HMTF ITS <br/> Official Website 
          </h1>
          <div className="divider mx-auto"></div>
          <h3 className="text-white text-center fw-semibold mt-3">
            Vivat TF Vivat Solidarity Together Forever
          </h3>
          <div className="d-flex justify-content-center mt-5">
            <a href="#tentang-hmtf">
              <button className="hero-button">About Us</button>
            </a>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Hero;
