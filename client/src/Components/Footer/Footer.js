import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const notify = () => toast("Submit Your Email!");
  const SignupSchema = () =>
    Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
    });

  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Register your email to get the latest updates.</p>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const res = await axios.post(
                      `http://localhost:3001/sendemail`,
                      values
                    );
                    console.log(res);
                    if (res.status === 200) {
                      toast.success(res.data);
                    } else {
                      toast.error("Error");
                    }
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="new-input"
                        onChange={handleChange}
                        id="email"
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                        // style={{
                        //   color: `${errors.email ? " red" : ""}`,
                        // }}
                      />

                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        onClick={notify}
                        // style={{
                        //   color: `${errors.email ? " red" : ""}`,
                        // }}
                      />
                    </form>
                    {touched.email && errors.email ? (
                      <div className="text-danger d-flex">{errors.email}</div>
                    ) : null}
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-6 footer-contact">
              <h3 className="footer_heading">MettleSol</h3>
              <p>
                <strong> Address:</strong>
                <br /> Gulberg III, Lahore, Punjab Pakistan
                <br />
                London United Kingdom
                <br />
                {/* United States <br /> */}
                <strong>Phone:</strong>
                <br /> +92-310-447-4914
                <br />
                <strong>Email:</strong>
                <br /> jason.f@mettlesol.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-xl-2 col-md-6 footer-links">
              <h4>Pages</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-xl-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Dedicated Teams</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#"> Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Custom Software</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Web App</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">QA & Testing</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">DevOps</a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-5 col-xl-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Follow the links to visit our social media accounts
              </p>
              <div className="social-links mt-3">
                <a href=" https://twitter.com/mettle_sol" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a
                  href="https://www.facebook.com/mettlesolution/"
                  className="facebook"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/mettlesol/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/company/mettlesol"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCm6uixC3_zk9lx-4Hzd6K3w"
                  className="linkedin"
                >
                  <i className="bx bxl-youtube" />
                </a>
              </div>
              <div className="row mt-4 justify-content-center">
                <div className=" col-3 d-flex">
                  <script
                    type="IN/FollowCompany"
                    data-id="74148764"
                    data-counter="bottom"
                  ></script>
                </div>
                <div className="  col-auto mt-0">
                  <img src='https://mettlesol.com/image/SoftwareDev%20(2).png' id='img-set'/>
                </div>
                <div className=" col-5" id='left-space'>
                  {/* clutch card */}
                  <div
                    className="clutch-widget justify-content-space-between"
                    data-nofollow="true"
                    data-url="https://widget.clutch.co"
                    data-widget-type="1"
                    data-height="90"
                    data-clutchcompany-id="1788300"
                  ></div>
                  {/*<img src='https://mettlesol.com/image/SoftwareDev%20(2).png' id='img-set'/>*/}

                </div>
                {/*<div className="col-lg-6 col-6 mt-0">*/}
                {/*  <img src='https://mettlesol.com/image/SoftwareDev%20(2).png' id='img-set'/>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          © Copyright
          <strong> &nbsp;MettleSol</strong>. All Rights Reserved
        </div>
        {/* <div className="credits">
          {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
