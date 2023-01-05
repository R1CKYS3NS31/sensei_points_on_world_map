import React from "react";
import { Marks } from "../../components/charts/topoJson/Marks";
import { UseData } from "../../components/charts/topoJson/UseData";
import './worldMap.css'

const width = 960;
const height = 500;

export const WorldMap = () => {
  const data = UseData();

  if (!data) return <pre>Please wait...</pre>;

  return (
    <>
      <h1>Contries with topojson</h1>;
      <svg width={width} height={height}>
        <Marks data={data} />
      </svg>
    </>
  );
};
