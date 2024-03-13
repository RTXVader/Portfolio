import React from "react";

function PortfolioPageItem({
  title,
  imgURL,
  stack,
  link,
  description,
  FE_Repo,
  BE_Repo,
}) {
  return (
    <div
      className="border border-solid border-stone-900 dark:border-white rounded-md overflow-hidden mb-6"
      onClick={() => window.open(link, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <div className="p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <div className="relative w-full h-64">
          <img
            src={imgURL}
            alt="portfolio"
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            style={{ objectFit: "contain" }}
          />
        </div>

        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <p>{description}</p>
        {FE_Repo && (
          <a href={FE_Repo} target="_blank" rel="noopener noreferrer">
            Frontend Repo
          </a>
        )}

        {BE_Repo && (
          <a href={BE_Repo} target="_blank" rel="noopener noreferrer">
            Backend Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default PortfolioPageItem;
