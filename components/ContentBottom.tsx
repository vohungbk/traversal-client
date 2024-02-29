import Link from "next/link";
import React from "react";

function ContentBottom() {
  return (
    <section className="w3l-bottom py-5">
      <div className="container py-md-4 py-3 text-center">
        <div className="row my-lg-4 mt-4">
          <div className="col-lg-9 col-md-10 ml-auto">
            <div className="bottom-info ml-auto">
              <div className="header-section text-left">
                <h3 className="hny-title two">Traveling makes a man wiser, but less happy.</h3>
                <p className="mt-3 pr-lg-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi.
                  Integer sit amet .Lorem ipsum dolor sit amet adipisicing elit.
                </p>
                <Link href="/about" className="btn btn-style btn-secondary mt-5">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentBottom;
