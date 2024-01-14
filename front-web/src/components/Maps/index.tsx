import React from "react";

import MapLocation from "./components/MapLocation";

import "./styles.css";

const Maps = () => {
  return (
    <article className="content location" aria-labelledby="label-location">
      <div className="location-emphasis">
        <h2 className="title" id="label-subtitle">Conheça nossa loja</h2>
      </div>

      <MapLocation />
    </article>

  );
};

export default Maps;
