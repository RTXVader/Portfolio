// PortfolioPage.jsx
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio";
import PortfolioPageItem from "./PortfolioPageItem";

function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    setPortfolioItems(portfolioData);
  }, []);

  return (
    <div className="container mt-12">
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <PortfolioPageItem
            key={index}
            title={item.title}
            imgURL={item.imgURL}
            stack={item.stack}
            link={item.link}
            description={item.description}
            FE_Repo={item.FE_Repo}
            BE_Repo={item.BE_Repo}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
