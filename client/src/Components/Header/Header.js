import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const [navebar, setNavbar] = useState(false);

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      id="header"
      className={navebar ? "fixed-top header headerscroll" : "fixed-top header"}
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">
            <img src="/assets/img/metttlesol-logo.png" />
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="/#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>

            {/*<li>*/}
            {/*  <Link className="nav-link scrollto" to="/blog">*/}
            {/*    Course*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <button
                class="getstarted scrollto btn-schedule"
                onClick={() =>
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/syedahsanali995",
                    color: "#2596be",
                    textColor: "#ffffff",
                    branding: true,
                  })
                }
              >
                Book Appointment
              </button>
            </li>
          </ul>
          <i id="navbar_click" className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
