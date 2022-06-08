import React from "react";

const Skils = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <img
              src="assets/img/skills.gif"
              className="img-fluid animated"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>Technologies Skills Set </h3>
            <p className="fst-italic">
              Below are the given languages that we work in and the percentage
              related to the efficiency proficiency in that specific language
            </p>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  React.js<i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  typescript<i className="val">93%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "93%" }}
                    aria-valuenow={93}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Node.js<i className="val">99%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "99%" }}
                    aria-valuenow={99}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Angluar.js<i className="val">98%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "98%" }}
                    aria-valuenow={98}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Vue.js<i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  aws<i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
