import { useState, useEffect } from "react";
import data from "../../../data/molecules.json";
import { useLoaderData, Link } from "react-router-dom";
import MedicationPriceChart from "./MedicationPriceChart";

export default function MoleculePage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const molecule = useLoaderData();
  console.log(molecule);

  //  check if the molecule has already been added to the favorites list when the component mounts
  useEffect(() => {
    const favoriteMolecules = localStorage.getItem("favoriteMolecules")
      ? JSON.parse(localStorage.getItem("favoriteMolecules"))
      : [];
    if (favoriteMolecules.includes(molecule.name)) {
      setIsFavorite(true);
    }
  }, [molecule.name]);


// Adding/removing of the molecule from the favorites
  function handleToggleFavorite() {
    const favoriteMolecules = localStorage.getItem("favoriteMolecules")
      ? JSON.parse(localStorage.getItem("favoriteMolecules"))
      : [];
    if (isFavorite) {
      const filteredMolecules = favoriteMolecules.filter(
        (favM) => favM !== molecule.name
      );
      localStorage.setItem(
        "favoriteMolecules",
        JSON.stringify(filteredMolecules)
      );
      setIsFavorite(false);
    } else {
      favoriteMolecules.push(molecule.name);
      localStorage.setItem(
        "favoriteMolecules",
        JSON.stringify(favoriteMolecules)
      );
      setIsFavorite(true);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-teal-950 flex justify-left gap-4 p-4 align-middle items-stretch">
        <Link to="/tekkare/molecules" className="hover:underline">
          <i className="fas fa-circle-left text-white text-2xl" />
        </Link>
        <h1>
          <Link to="/tekkare/molecules" className="hover:underline">
            Molecules
          </Link>{" "}
          / {molecule.name}
        </h1>
      </header>
      <div className="p-4 bg-gray-100 flex-grow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:flex">
          <article className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex flex-col basis-72">
            <header className="flex justify-between border-b border-teal-200 pb-2">
              <h2 className="text-2xl font-bold text-center text-teal-900 font-serif pl-4">
                {molecule.name}
              </h2>
              <i
                className={`fas fa-star text-xl ${
                  isFavorite ? "text-yellow-500" : "text-gray-300"
                } pr-2 cursor-pointer`}
                onClick={handleToggleFavorite}
              />
            </header>
            <p className="p-4 text-justify">{molecule.description}</p>
          </article>
          <div className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex flex-col flex-grow">
            <MedicationPriceChart medications={molecule.medications} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function loader({ params }) {
  const index = parseInt(params.index, 10); // Convert the index to an integer

  // Validate the index and check if it exists in the data
  if (isNaN(index) || index < 0 || index >= data.length) {
    throw new Response("Not Found", { status: 404 });
  }

  return data.molecules[index];
}
