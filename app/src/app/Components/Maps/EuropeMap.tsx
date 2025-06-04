"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

// List of European countries with ISO Alpha-3 codes, names, and colors
const europeCountryData = [
  { code: "ALB", name: "Albania" },
  { code: "AND", name: "Andorra" },
  { code: "AUT", name: "Austria" },
  { code: "BLR", name: "Belarus" },
  { code: "BEL", name: "Belgium" },
  { code: "BIH", name: "Bosnia and Herzegovina" },
  { code: "BGR", name: "Bulgaria" },
  { code: "HRV", name: "Croatia" },
  { code: "CYP", name: "Cyprus" },
  { code: "CZE", name: "Czech Republic" },
  { code: "DNK", name: "Denmark" },
  { code: "EST", name: "Estonia" },
  { code: "FIN", name: "Finland" },
  { code: "FRA", name: "France" },
  { code: "DEU", name: "Germany" },
  { code: "GRC", name: "Greece" },
  { code: "HUN", name: "Hungary" },
  { code: "ISL", name: "Iceland" },
  { code: "IRL", name: "Ireland" },
  { code: "ITA", name: "Italy" },
  { code: "XKX", name: "Kosovo" },
  { code: "LVA", name: "Latvia" },
  { code: "LIE", name: "Liechtenstein" },
  { code: "LTU", name: "Lithuania" },
  { code: "LUX", name: "Luxembourg" },
  { code: "MLT", name: "Malta" },
  { code: "MDA", name: "Moldova" },
  { code: "MCO", name: "Monaco" },
  { code: "MNE", name: "Montenegro" },
  { code: "NLD", name: "Netherlands" },
  { code: "MKD", name: "North Macedonia" },
  { code: "NOR", name: "Norway" },
  { code: "POL", name: "Poland" },
  { code: "PRT", name: "Portugal" },
  { code: "ROU", name: "Romania" },
  { code: "RUS", name: "Russia" },
  { code: "SMR", name: "San Marino" },
  { code: "SRB", name: "Serbia" },
  { code: "SVK", name: "Slovakia" },
  { code: "SVN", name: "Slovenia" },
  { code: "ESP", name: "Spain" },
  { code: "SWE", name: "Sweden" },
  { code: "CHE", name: "Switzerland" },
  { code: "UKR", name: "Ukraine" },
  { code: "GBR", name: "United Kingdom" },
  { code: "VAT", name: "Vatican City" },
  { code: "TUR", name: "Turkey" },
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
                      fill: "#b5bdb7",
                      stroke: "#000", // Set border color to black
                      strokeWidth: 0.5, // Adjust border thickness
                    },
                    hover: {
                      fill: "#F53",
                      stroke: "#000", // Keep border color on hover
                      strokeWidth: 0.7, // Slightly thicker border on hover
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      stroke: "#000", // Keep border color on press
                      strokeWidth: 0.7, // Slightly thicker border on press
                      outline: "none",
                    },
                  }}
                />
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}
