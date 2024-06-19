import "./footer.css";

import logo from "../assets/srf.png";
//import pic1 from "../assets/images/footer/payment/1.png";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
//import "../assets/css/material-design-iconic-font.css";
//import "../assets/css/simple-line-icons.css";
//import "../assets/css/slick.css";
//import "../assets/css/animate.min.css";
//import "../assets/css/jquery-ui.min.css";
//import "../assets/css/nice-select.css";
//import "../assets/css/timecircles.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-area-2">
        <div
          className="footer-top_area "
          style={{ backgroundColor: "rgb(0, 84, 41)" }}
        >
          <div className="container">
            <img src={logo} alt="Mahan Nepal Logo" className="mb-4" />

            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widgets_area address-widgets_area">
                  <div className="footer-widgets">
                    <p className="visit-info text-white">
                      To visit our head office here is the address for you
                    </p>
                    <p className="address-info text-white">
                      <strong>Address:</strong> 259 West Valley, Beauty Street
                      North Town, Lex Tower, New Yoark
                    </p>
                    <div className="widgets-contects">
                      <a href="tel://+75652 659 325" className="text-white">
                        75652 659 325,
                      </a>
                      <a href="tel://+98657 895 874" className="text-white">
                        98657 895 874
                      </a>
                    </div>
                    <div className="widgets-mail ">
                      <a
                        href="https://www.example.com"
                        target="_blink"
                        className="text-white"
                      >
                        www.example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-widgets_area">
                      <h3 className="heading text-white">Quick Link</h3>
                      <div className="footer-widgets text-white">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="text-white text-primary text-hover"
                            >
                              About us
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Featured Product
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              New Arrivals
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Blog Post
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Best Deals
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Contact us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widgets_area">
                      <h3 className="heading text-white">Information</h3>
                      <div className="footer-widgets text-white">
                        <ul>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Track Order
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Return Policy
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Privecy Policy
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Terms & Conditions
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Payment gateway
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Promotions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widgets_area">
                      <h3 className="heading text-white">Support</h3>
                      <div className="footer-widgets text-white">
                        <ul>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              24/7 Support
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Quality Control
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Quick Return
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Servicing
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Home Delivery
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" className="text-white">
                              Payment System
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright">
                  <span>
                    Copyright &copy; 2020
                    <a href="index.html">Quicky.</a>
                    <a href="https://hasthemes.com/" target="_blank">
                      All Rights Reserved.
                    </a>
                  </span>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="payment">
                  <img src={pic1} alt="Quciky's's Payment Method" />
                </div>
  </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
