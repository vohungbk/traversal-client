"use client";

import CountUp from "react-countup";

function Stats() {
  return (
    <>
      <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-0 py-3">
          <div className="row stats-con pb-lg-3">
            <div className="col-lg-3 col-6 stats_info counter_grid">
              <p className="counter">
                <CountUp end={730} duration={2.75} />
              </p>

              <h4>Branches</h4>
            </div>
            <div className="col-lg-3 col-6 stats_info counter_grid1">
              <p className="counter">
                <CountUp end={1680} duration={2.75} />
              </p>
              <h4>Travel Guides</h4>
            </div>
            <div className="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-5">
              <p className="counter">
                <CountUp end={812} duration={2.75} />
              </p>
              <h4>Happy Customers</h4>
            </div>
            <div className="col-lg-3 col-6 stats_info counter_grid2 mt-lg-0 mt-5">
              <p className="counter">
                <CountUp end={990} duration={2.75} />
              </p>
              <h4>Awards</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
