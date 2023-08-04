import React from "react";
import { getWorks } from "../../data";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";

function PosterDesign2023() {
  let works = getWorks();
  const currentWork = works.find((obj) => obj.name === "Poster2023");
  const workImages = currentWork.imagesExtra;

  return (
    <div className="work__container">
      <div className="specific poster2023">
        <Link to={"/work"}>
          <div className="btn backHome">
            <IoIosArrowRoundBack />
            Go back
          </div>
        </Link>

        <img src={currentWork.imageMain} alt="" className="work__image" />

        <div className="work__info">
          <h5>Title:</h5>
          <h2 className="work__title">{currentWork.title}</h2>
          <h5>Description:</h5>
          <p className="work__desc">{currentWork.description}</p>
          <h5>Year:</h5>
          <h6 className="work__year">{currentWork.year}</h6>
        </div>

        <div className="images">
          <div className="image-scroller">
            {workImages.map((image, index) => {
              return (
                //EL LINK SE CAMBIA DESDE EL INDEX.JS
                <div className="image-element" key={index}>
                  <img src={image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PosterDesign2023;
