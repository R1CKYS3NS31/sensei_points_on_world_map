import { max, scaleSqrt } from "d3";
import React from "react";
import { Marks } from "../../components/charts/topoJson/Marks";
import { useCities } from "../../components/charts/topoJson/useCities";
import { UseWorldAtlas } from "../../components/charts/topoJson/UseWorldAtlas";
import "./worldMap.css";

const width = 960;
const height = 500;

export const WorldMap = () => {
  const worldAtlas = UseWorldAtlas();
  const cities = useCities();

  if (!worldAtlas) return <pre>Please wait. World map Loading...</pre>;
  if (!cities) return <pre>Please wait. Cities Loading...</pre>;
  // console.log(cities);

  // the circle
  const sizeValue = (city) => city.population;
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <>
      <h1>Contries with topojson</h1>;
      <svg width={width} height={height}>
        <Marks
          worldAtlas={worldAtlas}
          cities={cities}
          sizeScale={sizeScale}
          sizeValue={sizeValue}
        />
      </svg>
    </>
  );
};
