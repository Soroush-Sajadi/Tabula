"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid, geoPath } from "d3-geo";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

// List of Asian countries with ISO Alpha-3 codes, names, and colors
const asiaCountryData = [
  { code: "AFG", name: "Afghanistan", color: "#CC4629" },
  { code: "ARM", name: "Armenia", color: "#2ECC46" },
  { code: "AZE", name: "Azerbaijan", color: "#2A46CC" },
  { code: "BHR", name: "Bahrain", color: "#CC297A" },
  { code: "BGD", name: "Bangladesh", color: "#7A29CC" },
  { code: "BTN", name: "Bhutan", color: "#29CCB8" },
  { code: "BRN", name: "Brunei", color: "#B8CC29" },
  { code: "KHM", name: "Cambodia", color: "#CC4629" },
  { code: "CHN", name: "China", color: "#2ECC46" },
  { code: "GEO", name: "Georgia", color: "#2A46CC" },
  { code: "IND", name: "India", color: "#CC297A" },
  { code: "IDN", name: "Indonesia", color: "#7A29CC" },
  { code: "IRN", name: "Iran", color: "#29CCB8" },
  { code: "IRQ", name: "Iraq", color: "#B8CC29" },
  { code: "ISR", name: "Israel", color: "#CC4629" },
  { code: "JPN", name: "Japan", color: "#2ECC46" },
  { code: "JOR", name: "Jordan", color: "#2A46CC" },
  { code: "KAZ", name: "Kazakhstan", color: "#CC297A" },
  { code: "KWT", name: "Kuwait", color: "#7A29CC" },
  { code: "KGZ", name: "Kyrgyzstan", color: "#29CCB8" },
  { code: "LAO", name: "Laos", color: "#B8CC29" },
  { code: "LBN", name: "Lebanon", color: "#CC4629" },
  { code: "MYS", name: "Malaysia", color: "#2ECC46" },
  { code: "MDV", name: "Maldives", color: "#2A46CC" },
  { code: "MNG", name: "Mongolia", color: "#CC297A" },
  { code: "MMR", name: "Myanmar", color: "#7A29CC" },
  { code: "NPL", name: "Nepal", color: "#29CCB8" },
  { code: "PRK", name: "North Korea", color: "#B8CC29" },
  { code: "OMN", name: "Oman", color: "#CC4629" },
  { code: "PAK", name: "Pakistan", color: "#2ECC46" },
  { code: "PHL", name: "Philippines", color: "#2A46CC" },
  { code: "QAT", name: "Qatar", color: "#CC297A" },
  { code: "SAU", name: "Saudi Arabia", color: "#7A29CC" },
  { code: "SGP", name: "Singapore", color: "#29CCB8" },
  { code: "KOR", name: "South Korea", color: "#B8CC29" },
  { code: "LKA", name: "Sri Lanka", color: "#CC4629" },
  { code: "SYR", name: "Syria", color: "#2ECC46" },
  { code: "TWN", name: "Taiwan", color: "#2A46CC" },
  { code: "TJK", name: "Tajikistan", color: "#CC297A" },
  { code: "THA", name: "Thailand", color: "#7A29CC" },
  { code: "TLS", name: "Timor-Leste", color: "#29CCB8" },
  { code: "TUR", name: "Turkey", color: "#B8CC29" },
  { code: "TKM", name: "Turkmenistan", color: "#CC4629" },
  { code: "ARE", name: "United Arab Emirates", color: "#2ECC46" },
  { code: "UZB", name: "Uzbekistan", color: "#2A46CC" },
  { code: "VNM", name: "Vietnam", color: "#CC297A" },
  { code: "YEM", name: "Yemen", color: "#7A29CC" },
];

export default function EuropeMap() {
  const path = geoPath(); // for calculating bounds (size)

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [100, 40], // [longitude, latitude]
        scale: 300,
      }}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies, projection }) =>
          geographies
            .filter((geo) =>
              asiaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo, index) => {
              const centroid = projection(geoCentroid(geo));
              const bounds = path.bounds(geo);
              const width = Math.abs(bounds[1][0] - bounds[0][0]);
              const height = Math.abs(bounds[1][1] - bounds[0][1]);
              const area = width * height;

              const name = geo.properties.name || "";
              const nameLength = name.length;

              // Hide if name too long for small country
              const shouldShowLabel = area > 200 && nameLength <= 20;

              return (
                <g key={geo.rsmKey}>
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
                        transform: "scale(1.3)",
                        transformOrigin: `${centroid ? centroid[0] : 0}px ${
                          centroid ? centroid[1] : 0
                        }px`,
                      },
                      pressed: {
                        fill: "#E42",
                        stroke: "#000", // Keep border color on press
                        strokeWidth: 0.7, // Slightly thicker border on press
                        outline: "none",
                      },
                    }}
                  />
                  {centroid && shouldShowLabel && (
                    <text
                      x={centroid[0]}
                      y={centroid[1]}
                      style={{
                        fontFamily: "system-ui",
                        fill: "#333",
                        fontSize: 8,
                        pointerEvents: "none",
                      }}
                      textAnchor="middle"
                      alignmentBaseline="central"
                    >
                      {name}
                    </text>
                  )}
                </g>
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}
