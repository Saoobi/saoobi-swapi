import React from "react";

import ItemCard from "../ItemCard";

function FilmsItem({ item }) {
  return (
    <div className="FilmsItem">
      <div>
        <span>Title :</span> <span>{item.title}</span>
      </div>
      <div>
        <span>Opening Crawl :</span> <span>{item.opening_crawl}</span>
      </div>
      <div>
        <span>Director :</span> <span>{item.director}</span>
      </div>
      <div>
        <span>Producer :</span> <span>{item.producer}</span>
      </div>
      <div>
        <span>Release Date</span> <span>{item.release_date}</span>
      </div>
      <div>
        <span>Characters : </span>
        <div className="ItemsGrid">
          {item.characters &&
            item.characters.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
      <div>
        <span>Planets : </span>
        <div className="ItemsGrid">
          {item.planets &&
            item.planets.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
      <div>
        <span>Starships : </span>
        <div className="ItemsGrid">
          {item.starships &&
            item.starships.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
      <div>
        <span>Vehicles : </span>
        <div className="ItemsGrid">
          {item.vehicles &&
            item.vehicles.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
      <div>
        <span>Species : </span>
        <div className="ItemsGrid">
          {item.species &&
            item.species.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FilmsItem;
