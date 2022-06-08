import React from "react";

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            MettleSol is working with the well-seasoned team for the past few
            years. Our team is working effectively and efficiently in the
            progress of the organization.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 pb-md-4 pb-3">
            <div
              className="member d-flex align-items-start pb-5 "
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="pic">
                <img
                  src="assets/img/team/ceo.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="mobile">
                  <h4>Syed Ahsan Ali </h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
              <div className="member-info">
                <div className="desktop">
                  <h4>Syed Ahsan Ali </h4>
                  <span>Chief Executive Officer</span>
                </div>
                <p>
                  He is recognized as the leading role model for IT
                  professionals in Pakistan.
                  <br />
                </p>
                <div className="social">
                  {/* <a href>
                    <i className="ri-twitter-fill" />
                  </a> */}
                  <a href="https://www.facebook.com/syed.ahsanali.7965">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="https://instagram.com/syedahsan43?igshid=YmMyMTA2M2Y=">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="https://pk.linkedin.com/in/syed-ahsan-ali-60644513a?trk=public_profile-settings_edit-profile-content">
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-md-4 pb-3">
            <div
              className="member d-flex align-items-start pb-4"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="mobile">
                  <h4>Subhan Hashmi</h4>
                  <span>Sales Executive</span>
                </div>
              </div>
              <div className="member-info" id="pbottom">
                <div className="desktop">
                  <h4>Subhan Hashmi</h4>
                  <span>Sales Executive</span>
                </div>
                <p>
                  He is an accomplished business developer and his skills at
                  creating relationships with clients are legendary.
                </p>
                <div className="social">
                  <a href="https://www.facebook.com/subhan.hashmi.758">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="https://www.instagram.com/invites/contact/?i=gcc8ucnbc4t6&utm_content=lsw0j8n">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="https://www.linkedin.com/in/subhan-hashmi-61bbb0214">
                    <i className="ri-linkedin-box-fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 mt-4">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>
                  Quisquam facilis cum velit laborum corrupti fuga rerum quia
                </p>
                <div className="social">
                  <a href>
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href>
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href>
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href>
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-6 mt-4">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>
                  Dolorum tempora officiis odit laborum officiis et et accusamus
                </p>
                <div className="social">
                  <a href>
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href>
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href>
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href>
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;
