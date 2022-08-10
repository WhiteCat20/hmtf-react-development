import React from "react";
import Hmtf from "./hmtf.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg py-4">
        <div class="container navbar-wrapper">
          <img src={Hmtf} alt="" width="60" />
          <div class="navbar-brand text-white  ms-3" href="#">
            HMTF-ITS
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto mt-1 mb-2 mb-lg-0">
              <Link to="/" className="text-decoration-none">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/about" className="text-decoration-none">
                <a class="nav-link active" href="#">
                  About Us
                </a>
              </Link>
              <a class="nav-link active" href="#">
                SOP
              </a>
              <a class="nav-link active" href="#">
                Akademik
              </a>
              <a class="nav-link active" href="#">
                Event
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
