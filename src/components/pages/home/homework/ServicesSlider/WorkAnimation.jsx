import React from "react";
import service1 from "./img/service1.png";
import service2 from "./img/service2.png";
import service3 from "./img/service3.png";
import service4 from "./img/service4.png";
import service5 from "./img/service5.png";
import service6 from "./img/service6.png";
import service7 from "./img/service7.png";
import service8 from "./img/service8.png";

function WorkAnimation() {
  return (
    <div>
      <div className="animation__container">
        <div className="animation__animate animate">
          <div className="animation__parts">
            <img src={service1} />

            <img src={service2} />

            <div src={service3} />

            <img src={service4} />

            <img src={service5} />

            <img src={service6} />

            <img src={service7} />

            <img src={service8} />
          </div>
          <div className="animation__parts">
            <img src={service1} />

            <img src={service2} />

            <div src={service3} />

            <img src={service4} />

            <img src={service5} />

            <img src={service6} />

            <img src={service7} />

            <img src={service8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkAnimation;
