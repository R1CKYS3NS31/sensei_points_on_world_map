import React from "react";
import { Marks } from "../../components/charts/topoJson/Marks";
import { useCities } from "../../components/charts/topoJson/useCities";
import { UseWorldAtlas } from "../../components/charts/topoJson/UseWorldAtlas";
import './worldMap.css'

const width = 960;
const height = 500;

export const WorldMap = () => {
  const data = UseWorldAtlas();
  const cities = useCities()

  console.log(cities);

  if (!data) return <pre>Please wait. World map Loading...</pre>;
  if (!cities) return <pre>Please wait. Cities Loading...</pre>;

  return (
    <>
      <h1>Contries with topojson</h1>;
      <svg width={width} height={height}>
        <Marks data={data} />
      </svg>
    </>
  );
};
