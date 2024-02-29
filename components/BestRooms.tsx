import { popularData } from "@/shared/constant";
import React from "react";
import { ImageResponsive } from "./ImageResponsive";

type PlaceDataType = {
  src: string;
  durations: string;
  price: string;
};

function BestRooms() {
  const ImageCard = (item: PlaceDataType) => (
    <figure className="effect-lily border-radius  m-0">
      <ImageResponsive src={item.src} />
      <figcaption>
        <div>
          <h4>{item.durations}</h4>
          <p>From {item.price}$ </p>
        </div>
      </figcaption>
    </figure>
  );

  const mainItem = popularData[popularData.length - 1];

  return (
    <div className="best-rooms py-5">
      <div className="container py-md-5">
        <div className="ban-content-inf row">
          <div className="maghny-gd-1 col-lg-6 ">
            <div className="maghny-grid">{ImageCard(mainItem)}</div>
          </div>
          <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
            <div className="row">
              {popularData
                .slice(0, -1)
                ?.reverse()
                .slice(0, 4)
                .map((item, index) => (
                  <div key={index.toString()} className={`maghny-gd-1 col-6 ${[2, 3].includes(index) && "mt-4"}`}>
                    <div className="maghny-grid">{ImageCard(item)}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestRooms;
