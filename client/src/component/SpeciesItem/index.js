import React from "react";

import ItemCard from "../ItemCard";

function SpeciesItem({ item }) {
  return (
    <div className="SpeciesItem">
      <div>
        <span>Name :</span> <span>{item.name}</span>
      </div>
      <div>
        <span>Classification :</span> <span>{item.classification}</span>
      </div>
      <div>
        <span>Designation :</span> <span>{item.designation}</span>
      </div>
      <div>
        <span>Average Height :</span> <span>{item.average_height} cm</span>
      </div>
      <div>
        <span>Skin Colors :</span> <span>{item.skin_colors}</span>
      </div>
      <div>
        <span>Hair Colors :</span> <span>{item.hair_colors}</span>
      </div>
      <div>
        <span>Eye Colors :</span> <span>{item.eye_colors}</span>
      </div>
      <div>
        <span>Average lifespan :</span> <span>{item.average_lifespan}</span>
      </div>
      <div>
        <span>HomeWorld : </span>
        <div className="ItemsGrid">
          {item.homeworld && (
            <ItemCard url={item.homeworld} width="250px" height="150px" />
          )}
        </div>
      </div>
      <div>
        <span>Language :</span> <span>{item.language}</span>
      </div>
      <div>
        <span>People : </span>
        <div className="ItemsGrid">
          {item.people &&
            item.people.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
      <div>
        <span>Films : </span>
        <div className="ItemsGrid">
          {item.films &&
            item.films.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SpeciesItem;
