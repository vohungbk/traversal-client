"use client";

import React from "react";
import CountUp from "react-countup";

function StatsHny() {
  return (
    <section className="w3l-statshny py-5" id="stats">
      <div className="container py-lg-5 py-md-4">
        <div className="w3-stats-inner-info">
          <div className="row">
            <div className="col-lg-4 col-6 stats_info counter_grid text-left">
              <span className="fa fa-smile-o"></span>
              <p className="counter">
                <CountUp end={1730} duration={2.75} />
              </p>
              <h4>Happy Customers</h4>
            </div>
            <div className="col-lg-4 col-6 stats_info counter_grid1 text-left">
              <span className="fa fa-users"></span>
              <p className="counter">
                <CountUp end={730} duration={2.75} />
              </p>
              <h4>Custom Products</h4>
            </div>
            <div className="col-lg-4 col-6 stats_info counter_grid mt-lg-0 mt-5 text-left">
              <span className="fa fa-database"></span>
              <p className="counter">
                <CountUp end={30} duration={2.75} />
              </p>
              <h4>branches</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsHny;
