import React from "react";

import ItemCard from "../ItemCard";

function VehiclesItem({ item }) {
  return (
    <div className="VehiclesItem">
      <div>
        <span>Name :</span> <span>{item.name}</span>
      </div>
      <div>
        <span>Model :</span> <span>{item.model}</span>
      </div>
      <div>
        <span>Manufacturer :</span> <span>{item.manufacturer}</span>
      </div>
      <div>
        <span>Cost (in credits) :</span> <span>{item.cost_in_credits}</span>
      </div>
      <div>
        <span>Lenght :</span> <span>{item.length}</span>
      </div>
      <div>
        <span>Max Atmosphering Speed :</span>
        <span>{item.max_atmosphering_speed}</span>
      </div>
      <div>
        <span>Crew :</span> <span>{item.crew}</span>
      </div>
      <div>
        <span>Passengers :</span> <span>{item.passengers}</span>
      </div>
      <div>
        <span>Cargo Capacity :</span> <span>{item.cargo_capacity}</span>
      </div>
      <div>
        <span>Consumables :</span> <span>{item.consumables}</span>
      </div>
      <div>
        <span>Vehicle Class :</span> <span>{item.vehicle_class}</span>
      </div>
      <div>
        <span>Pilots : </span>
        <div className="ItemsGrid">
          {item.pilots &&
            item.pilots.map((data) => (
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

export default VehiclesItem;
