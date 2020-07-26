import React from "react";

import ItemCard from "../ItemCard";

function PlanetsItem({ item }) {
  return (
    <div className="PlanetsItem">
      <div>
        <span>Name :</span> <span>{item.name}</span>
      </div>
      <div>
        <span>Rotation Period :</span> <span>{item.rotation_period} hours</span>
      </div>
      <div>
        <span>Orbital Period :</span> <span>{item.orbital_period} hours</span>
      </div>
      <div>
        <span>Diameter :</span> <span>{item.diameter}</span>
      </div>
      <div>
        <span>Climate :</span> <span>{item.climate}</span>
      </div>
      <div>
        <span>Gravity :</span> <span>{item.gravity}</span>
      </div>
      <div>
        <span>Terrain :</span> <span>{item.terrain}</span>
      </div>
      <div>
        <span>Surface_water :</span> <span>{item.surface_water}</span>
      </div>
      <div>
        <span>Population :</span> <span>{item.population}</span>
      </div>
      <div>
        <span>Residents : </span>
        <div className="ItemsGrid">
          {item.residents &&
            item.residents.map((data) => (
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

export default PlanetsItem;
