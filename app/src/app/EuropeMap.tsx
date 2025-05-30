"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

// List of European countries with ISO Alpha-3 codes, names, and colors
const europeCountryData = [
  { code: "ALB", name: "Albania", color: "#CC4629" },
  { code: "AND", name: "Andorra", color: "#2ECC46" },
  { code: "AUT", name: "Austria", color: "#2A46CC" },
  { code: "BLR", name: "Belarus", color: "#CC297A" },
  { code: "BEL", name: "Belgium", color: "#7A29CC" },
  { code: "BIH", name: "Bosnia and Herzegovina", color: "#29CCB8" },
  { code: "BGR", name: "Bulgaria", color: "#B8CC29" },
  { code: "HRV", name: "Croatia", color: "#CC4629" },
  { code: "CYP", name: "Cyprus", color: "#2ECC46" },
  { code: "CZE", name: "Czech Republic", color: "#2A46CC" },
  { code: "DNK", name: "Denmark", color: "#CC297A" },
  { code: "EST", name: "Estonia", color: "#7A29CC" },
  { code: "FIN", name: "Finland", color: "#29CCB8" },
  { code: "FRA", name: "France", color: "#B8CC29" },
  { code: "DEU", name: "Germany", color: "#CC4629" },
  { code: "GRC", name: "Greece", color: "#2ECC46" },
  { code: "HUN", name: "Hungary", color: "#2A46CC" },
  { code: "ISL", name: "Iceland", color: "#CC297A" },
  { code: "IRL", name: "Ireland", color: "#7A29CC" },
  { code: "ITA", name: "Italy", color: "#29CCB8" },
  { code: "XKX", name: "Kosovo", color: "#B8CC29" },
  { code: "LVA", name: "Latvia", color: "#CC4629" },
  { code: "LIE", name: "Liechtenstein", color: "#2ECC46" },
  { code: "LTU", name: "Lithuania", color: "#2A46CC" },
  { code: "LUX", name: "Luxembourg", color: "#CC297A" },
  { code: "MLT", name: "Malta", color: "#7A29CC" },
  { code: "MDA", name: "Moldova", color: "#29CCB8" },
  { code: "MCO", name: "Monaco", color: "#B8CC29" },
  { code: "MNE", name: "Montenegro", color: "#CC4629" },
  { code: "NLD", name: "Netherlands", color: "#2ECC46" },
  { code: "MKD", name: "North Macedonia", color: "#2A46CC" },
  { code: "NOR", name: "Norway", color: "#CC297A" },
  { code: "POL", name: "Poland", color: "#7A29CC" },
  { code: "PRT", name: "Portugal", color: "#29CCB8" },
  { code: "ROU", name: "Romania", color: "#B8CC29" },
  { code: "RUS", name: "Russia", color: "#CC4629" },
  { code: "SMR", name: "San Marino", color: "#2ECC46" },
  { code: "SRB", name: "Serbia", color: "#2A46CC" },
  { code: "SVK", name: "Slovakia", color: "#CC297A" },
  { code: "SVN", name: "Slovenia", color: "#7A29CC" },
  { code: "ESP", name: "Spain", color: "#29CCB8" },
  { code: "SWE", name: "Sweden", color: "#B8CC29" },
  { code: "CHE", name: "Switzerland", color: "#CC4629" },
  { code: "UKR", name: "Ukraine", color: "#2ECC46" },
  { code: "GBR", name: "United Kingdom", color: "#2A46CC" },
  { code: "VAT", name: "Vatican City", color: "#CC297A" },
];

export default function EuropeMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        scale: 800,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter((geo) =>
              europeCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = europeCountryData.find(
                (country) => country.code === geo.id
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: country?.color || "#D6D6DA",
                    },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}
