import React from "react";

import { AiOutlineTeam } from "react-icons/ai";

import { MdHighQuality } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container " data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <h4>WE PROVIDE CUSTOM SOFTWARE SOLUTIONS</h4>
          <p>
            All types of businesses need access to development resources, so we
            give you the option to decide how much you need to use.
          </p>
        </div>
        <div className="row mt-4">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div class="icon">
                {/* <VscGitPullRequestCreate
                  style={{ color: "#47b2e4", fontSize: "3rem" }}
                /> */}
                <SiAltiumdesigner
                  style={{ color: "#47b2e4", fontSize: "3rem" }}
                />
              </div>
              <h4>
                <a href>Responsive &amp; Creative Web Designing</a>
              </h4>
              <p>
                At MettleSol, we combine knowledge, experience, and talent to
                produce cutting-edge visuals in web designing.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div class="icon">
                <FaConnectdevelop
                  style={{ color: "#47b2e4", fontSize: "3rem" }}
                />
              </div>
              <h4>
                <a href>Web Development</a>
              </h4>
              <p>
                Our team with over 10 years of experience is very skilled at
                designing and delivering the best solutions providing the
                greatest efficiency.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <MdHighQuality style={{ color: "#47b2e4", fontSize: "3rem" }} />
              </div>
              <h4>
                <a href>Quality Assurance</a>
              </h4>
              <p>
                We inspire you to deliver excellence through our efficient QA
                team that works through and through to ensure the best outcomes
                for your workflows.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="icon-box">
              <div className="icon">
                <AiOutlineTeam style={{ color: "#47b2e4", fontSize: "3rem" }} />
              </div>
              <h4>
                <a href="/DedicatedTeams">Dedicated Teams</a>
              </h4>
              <p>
                We grow the tour team using our development resources and
                recruitment capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container mt-5" data-aos="fade-up">*/}
      {/*  <div className="row">*/}
      {/*<div*/}
      {/*  className="col-xl-4 col-md-6 d-flex align-items-stretch "*/}
      {/*  data-aos="zoom-in"*/}
      {/*  data-aos-delay={100}*/}
      {/*>*/}
      {/*  <div className="icon-box">*/}
      {/*    <div class="icon">*/}
      {/*      <SiMaterialdesign*/}
      {/*        style={{ color: "#47b2e4", fontSize: "3rem" }}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <h4>*/}
      {/*      <a href> UI/UX Design</a>*/}
      {/*    </h4>*/}
      {/*    <p>*/}
      {/*      Our team of experienced product designers & developers helps you*/}
      {/*      build successful digital products.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"*/}
      {/*  data-aos="zoom-in"*/}
      {/*  data-aos-delay={300}*/}
      {/*>*/}

      {/*</div>*/}

      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default Services;
