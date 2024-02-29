import { popularData } from "@/shared/constant";
import { ImageResponsive } from "./ImageResponsive";

function Popular() {
  return (
    <section className="w3l-grids-3 py-5">
      <div className="container py-md-5">
        <div className="title-content text-left mb-lg-5 mb-4">
          <h6 className="sub-title">Visit</h6>
          <h3 className="hny-title">Popular Destinations</h3>
        </div>
        <div className="row bottom-ab-grids">
          {popularData?.slice(0, 8).map((item, index) => (
            <div key={index.toString()} className={`col-lg-6 subject-card mt-4 ${[0, 1].includes(index) && "mt-lg-0"}`}>
              <div className="subject-card-header p-4">
                <a href="#" className="card_title p-lg-4d-block">
                  <div className="row align-items-center">
                    <div className="col-sm-5 subject-img">
                      <ImageResponsive src={item.src} />
                    </div>
                    <div className="col-sm-7 subject-content mt-sm-0 mt-4">
                      <h4>{item.place}</h4>
                      <p>{item.durations}</p>
                      <div className="dst-btm">
                        <h6 className=""> Start From </h6>
                        <span>${item.price}</span>
                      </div>
                      <p className="sub-para">{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
