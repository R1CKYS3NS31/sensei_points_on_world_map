import { geoGraticule, geoNaturalEarth1, geoPath } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({ data: { land, interiors } }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })} />
    <path className="graticule" d={path(graticule())} />
    {land.features.map((feature,i) => (
      <path className="land" d={path(feature)} key={i}/>
    ))}
    <path className="interiors" d={path(interiors)} />
  </g>
);
