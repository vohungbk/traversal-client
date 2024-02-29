"use client";

import $ from "jquery";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    const initOwlCarousel = () => {
      $("#owl-demo1").owlCarousel({});
    };

    // Ensure jQuery is loaded and initialized
    if (typeof $ !== "undefined") {
      console.log("222");

      initOwlCarousel();
    } else {
      console.error("jQuery is not properly loaded.");
    }
  }, []);

  return (
    <>
      <section className="w3l-clients" id="clients">
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-4 py-md-3 pb-lg-0">
            <div className="heading text-center mx-auto">
              <h6 className="sub-title text-center">Here’s what they have to say</h6>
              <h3 className="hny-title mb-md-5 mb-4">our clients do the talking</h3>
            </div>

            <div className="testimonial-width">
              <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <span className="fa fa-quote-left" aria-hidden="true"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse
                        quasi. Integer sit amet .Lorem ipsum dolor sit amet adipisicing elit. Laborum dolor facere ipsum adipisicingelit.
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img src="assets/images/c1.jpg" className="img-fluid" alt="client-img" />
                        </div>
                        <div className="peopl align-self">
                          <h3>Rohit Paul</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <span className="fa fa-quote-left" aria-hidden="true"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse
                        quasi. Integer sit amet .Lorem ipsum dolor sit amet adipisicing elit. Laborum dolor facere ipsum adipisicingelit.
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img src="assets/images/c2.jpg" className="img-fluid" alt="client-img" />
                        </div>
                        <div className="peopl align-self">
                          <h3>Shveta</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <span className="fa fa-quote-left" aria-hidden="true"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse
                        quasi. Integer sit amet .Lorem ipsum dolor sit amet adipisicing elit. Laborum dolor facere ipsum adipisicingelit.
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img src="assets/images/c3.jpg" className="img-fluid" alt="client-img" />
                        </div>
                        <div className="peopl align-self">
                          <h3>Roy Linderson</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <span className="fa fa-quote-left" aria-hidden="true"></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse
                        quasi. Integer sit amet .Lorem ipsum dolor sit amet adipisicing elit. Laborum dolor facere ipsum adipisicingelit.
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img src="assets/images/c4.jpg" className="img-fluid" alt="client-img" />
                        </div>
                        <div className="peopl align-self">
                          <h3>Mike Thyson</h3>
                          <p className="indentity">Example City</p>
                        </div>
                      </div>
                    </div>
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

export default Clients;
