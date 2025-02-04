import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5">Subscribe Our Newsletter</h2>
                  <p className="sub f-mulish clr-pri-2">
                    Amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua suspendisse
                    ultrices gravida. Risus commodo
                  </p>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="Email Address"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/logofootert.png"
                          alt="kinco"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                  Step into the prehistoric era with Dino World, the ultimate destination for fun, adventure, and education for all ages!
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="f">
                        <span  className="text-justfy">
                          <i className="far fa-map-marker-alt "  />Banda Ravirala Village, Abdullahpurmet Mandal,
                          R.R District, Hyderabad, Telangana
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:hotline@gmail.com">
                          <i className="far fa-envelope" /> sample@gmail.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +91 9876543210
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">opening hours</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Hours: 
                          Tuesday - Sunday</span>
                        </li>
                        <li>
                          <span className="f-mulish">11 am - 00 pm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>Every Monday</p>
                      <h4 className="title-widget text-danger">closed</h4>
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Our Program</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Home</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Activities </a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Packages</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Gallery</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Contact</a>
                      </Link>
                    </li>
                    {/* <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">English Basic</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Social Science</a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                Copyright © 2025, All Rights Reserved. Proudly designed and developed by  {" "} 
                  <a href="https://mannkey.com/" target="_blank" className="text-warning">
                   Mannkey
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
