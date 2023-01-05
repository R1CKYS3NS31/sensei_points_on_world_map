import { geoGraticule, geoNaturalEarth1, geoPath } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  cities,
  sizeScale,
  sizeValue,
}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })} />
    <path className="graticule" d={path(graticule())} />
    {land.features.map((feature, i) => (
      <path className="land" d={path(feature)} key={i} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {/* cities */}
    {cities.map((city, i) => {
      const [x, y] = projection([city.lng, city.lat]);
      return <circle cx={x} cy={y} r={sizeScale(sizeValue(city))} key={i} />;
    })}
  </g>
);
