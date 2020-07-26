import React from "react";

import ItemCard from "../ItemCard";

function PeopleItem({ item }) {
  return (
    <div className="PeopleItem">
      <div>
        <span>Name :</span> <span>{item.name}</span>
      </div>
      <div>
        <span>Height :</span> <span>{item.height} cm</span>
      </div>
      <div>
        <span>Mass :</span> <span>{item.mass} lb</span>
      </div>
      <div>
        <span>Hair Color :</span> <span>{item.hair_color}</span>
      </div>
      <div>
        <span>Skin Color :</span> <span>{item.skin_color}</span>
      </div>
      <div>
        <span>Eye Color :</span> <span>{item.eye_color}</span>
      </div>
      <div>
        <span>Birth Year :</span> <span>{item.birth_year}</span>
      </div>
      <div>
        <span>Gender :</span> <span>{item.gender}</span>
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
        <span>Films : </span>
        <div className="ItemsGrid">
          {item.films &&
            item.films.map((data) => (
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
        <span>Starships : </span>
        <div className="ItemsGrid">
          {item.starships &&
            item.starships.map((data) => (
              <ItemCard key={data} url={data} width="350px" height="150px" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PeopleItem;
