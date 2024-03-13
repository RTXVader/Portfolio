import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import "slick-css";
import "slick-theme-css";

import Slider from "react-slick";
import Title from "./Title";

// function Portfolio() {
// return {
/* <div className="flex flex-col md:flex-row items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {portfolio.map((project, index) => (
      <PortfolioItem
        key={index}
        imgURL={project.imgURL}
        title={project.title}
        stack={project.stack}
        link={project.link}
      />
    ))}
  </div>
</div> */
//   };
// }
function Portfolio() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Title>Portfolio Slider</Title>
      <Slider {...settings}>
        {portfolio.map((project, index) => (
          <div key={index} className="slider-item">
            <PortfolioItem
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Portfolio;
