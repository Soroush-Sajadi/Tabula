import EuropeMap from "./Components/Maps/EuropeMap";
import AsiaMap from "./Components/Maps/AsiaMap";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Europe Political Map</h1>
      <AsiaMap />
    </main>
  );
}
