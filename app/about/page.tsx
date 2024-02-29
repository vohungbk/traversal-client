/* eslint-disable @next/next/no-img-element */
import { Breadcrumb } from "@/components/Breadcrumb";
import StatsHny from "@/components/Statshny";

function About() {
  return (
    <>
      <Breadcrumb pageName="About" title="About Us" />
      <section className="w3l-cta4 py-5">
        <div className="container py-lg-5">
          <div className="ab-section text-center">
            <h6 className="sub-title">About Us</h6>
            <h3 className="hny-title">Travel to make memories all around the world.</h3>
            <p className="py-3 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat minima
              blanditiis dignissimos.
            </p>
            <a href="services.html" className="btn btn-style btn-primary">
              Read More
            </a>
          </div>
          <div className="row mt-5">
            <div className="col-md-9 mx-auto">
              <img src="/assets/images/banner3.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-content-6 py-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-6 content-6-left pr-lg-5">
              <h6 className="sub-title">Why Choose Us</h6>
              <h3 className="hny-title">Life begins at the end of your comfort zone.</h3>
            </div>
            <div className="col-lg-6 content-6-right mt-lg-0 mt-4">
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat minima
                blanditiis dignissimos.
              </p>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum labore sed, veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat minima
                blanditiis dignissimos.
              </p>
              <a href="services.html" className="btn btn-style btn-primary mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-grids1">
        <div className="hny-three-grids py-5">
          <div className="container py-lg-5">
            <div className="row">
              <div className="col-md-4 col-sm-6 mt-0 grids5-info">
                <a href="#url">
                  <img src="assets/images/g1.jpg" className="img-fluid" alt="" />
                </a>
                <h5>Lorem</h5>
                <h4>
                  <a href="#url">Investor Relations</a>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit doloremque.</p>
              </div>
              <div className="col-md-4 col-sm-6 mt-sm-0 mt-5 grids5-info">
                <a href="#url">
                  <img src="assets/images/g2.jpg" className="img-fluid" alt="" />
                </a>
                <h5>Lorem</h5>
                <h4>
                  <a href="#url">Partner With Care</a>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit doloremque.</p>
              </div>
              <div className="col-md-4 col-sm-6 mt-md-0 mt-5 grids5-info">
                <a href="#url">
                  <img src="assets/images/g3.jpg" className="img-fluid" alt="" />
                </a>
                <h5>Lorem</h5>
                <h4>
                  <a href="#url">Customer Care</a>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit doloremque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatsHny />
      <section className="w3l-team" id="team">
        <div className="team-block py-5">
          <div className="container py-lg-5">
            <div className="title-content text-center mb-lg-3 mb-4">
              <h6 className="sub-title">Our team</h6>
              <h3 className="hny-title">Meet our Guides</h3>
            </div>
            <div className="row">
              <div className="col-lg-3 col-6 mt-lg-5 mt-4">
                <div className="box16">
                  <a href="#url">
                    <img src="assets/images/team1.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="box-content">
                    <h3 className="title">
                      <a href="#url">Alexander</a>
                    </h3>
                    <span className="post">Description</span>
                    <ul className="social">
                      <li>
                        <a href="#" className="facebook">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-5 mt-4">
                <div className="box16">
                  <a href="#url">
                    <img src="assets/images/team2.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="box-content">
                    <h3 className="title">
                      <a href="#url">Victoria</a>
                    </h3>
                    <span className="post">Description</span>
                    <ul className="social">
                      <li>
                        <a href="#" className="facebook">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-5 mt-4">
                <div className="box16">
                  <a href="#url">
                    <img src="assets/images/team3.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="box-content">
                    <h3 className="title">
                      <a href="#url">Smith roy</a>
                    </h3>
                    <span className="post">Description</span>
                    <ul className="social">
                      <li>
                        <a href="#" className="facebook">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-5 mt-4">
                <div className="box16">
                  <a href="#url">
                    <img src="assets/images/team4.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="box-content">
                    <h3 className="title">
                      <a href="#url">Johnson</a>
                    </h3>
                    <span className="post">Description</span>
                    <ul className="social">
                      <li>
                        <a href="#" className="facebook">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
