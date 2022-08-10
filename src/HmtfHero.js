import React from "react";
import LogoNiat from "./css/Logo Harmoni Manfaat.png";

function HmtfHero() {
  return (
    <>
      <div id="hmtf-hero">
        <div className="container container-hero row mx-auto">
          <div className="col-lg-5 d-flex justify-content-center container-logo">
            <img src={LogoNiat} alt="" width="323" />
          </div>
          <div className="col-lg-7">
            <p className="" id="header-1">
              HMTF ITS 21/22
            </p>
            <div id="header-2">
              <p>HARMONI</p>
              <p>MANFAAT</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center hero-slogan">
          <div className="" id="slogan">
            <i class="fa-solid fa-puzzle-piece"></i> Adaptif
          </div>
          <div className="" id="slogan">
            <i class="fa-solid fa-user-gear"></i> Berkelanjutan
          </div>
          <div className="" id="slogan">
            <i class="fa-solid fa-people-pulling"></i> Bermanfaat
          </div>
        </div>
      </div>
    </>
  );
}

export default HmtfHero;
