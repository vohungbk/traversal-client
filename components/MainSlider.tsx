import Script from "next/script";
import React from "react";

function MainSlider() {
  return (
    <section className="w3l-main-slider" id="home">
      <Script src="/assets/js/jquery-3.3.1.min.js" />
      <Script src="/assets/js/jquery.min.js" />
      <Script src="/assets/js/jquery.zoomslider.min.js" />
      <div className="banner-content">
        <div
          id="demo-1"
          data-zs-src='["/assets/images/banner1.jpg", "/assets/images/banner2.jpg","/assets/images/banner3.jpg", "assets/images/banner4.jpg"]'
          data-zs-overlay="dots"
        >
          <div className="demo-inner-content">
            <div className="container">
              <div className="banner-infhny">
                <h3>{`You don't need to go far to find what matters.`}</h3>
                <h6 className="mb-3">Discover your next adventure</h6>
                <div className="flex-wrap search-wthree-field mt-md-5 mt-4">
                  <form action="#" method="post" className="booking-form">
                    <div className="row book-form">
                      <div className="form-input col-md-4 mt-md-0 mt-3">
                        <select name="selectpicker" className="selectpicker">
                          <option value="">Destinaion</option>
                          <option value="africa">Africa</option>
                          <option value="america">America</option>
                          <option value="asia">Asia</option>
                          <option value="eastern-europe">Eastern Europe</option>
                          <option value="europe">Europe</option>
                          <option value="south-america">South America</option>
                        </select>
                      </div>
                      <div className="form-input col-md-4 mt-md-0 mt-3">
                        <input type="date" name="" placeholder="Date" required />
                      </div>
                      <div className="bottom-btn col-md-4 mt-md-0 mt-3">
                        <button className="btn btn-style btn-secondary">
                          <span className="fa fa-search mr-3" aria-hidden="true"></span> Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
