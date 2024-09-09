import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import data from "../../../data/molecules.json";
import MoleculeCard from "./MoleculeCard";

export default function MoleculesList() {
  // State to dynamically store the search bar value and filter the molecules
  const molecules = useLoaderData();
  const [searchBarValue, setSearchBarValue] = useState("");
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  // Filtering the molecules list with the search bar value on the molecules and the medications names
  const filteredMolecules = molecules.filter((molecule) => {
    return (
      molecule.name
        .toLowerCase()
        .includes(searchBarValue.trim().toLowerCase()) ||
      molecule.medications.some((medication) =>
        medication.name.toLowerCase().includes(searchBarValue.toLowerCase())
      )
    );
  });

  // Updating the state of the search bar value to dynamically refresh the list
  function handleSearchBarValueChange(event) {
    setSearchBarValue(event.target.value);
  }

  function handleCloseSearchBar() {
    setDisplaySearchBar(false);
    setSearchBarValue("");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-teal-950 flex justify-between gap-4 p-4 items-stretch">
        <h1>Molecules & Medications</h1>
        <div className="h-full">
          {!displaySearchBar && (
            <i
              className="fas fa-magnifying-glass text-white text-2xl cursor-pointer"
              onClick={() => {
                setDisplaySearchBar(true);
              }}
            />
          )}
          {displaySearchBar && (
            <div className="flex gap-2 items-center">
              <input
                className="text-white border-b bg-transparent h-9 w-26 placeholder:text-white outline-none"
                type="text"
                placeholder="Recherchez ici..."
                value={searchBarValue}
                onChange={handleSearchBarValueChange}
                autoFocus
              />
              <i
                className="fas fa-xmark text-white text-2xl cursor-pointer"
                onClick={handleCloseSearchBar}
              />
            </div>
          )}
        </div>
      </header>
      <div className="p-4 bg-gray-100 flex-grow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 ">
          {filteredMolecules.map((molecule, index) => {
            return (
              <MoleculeCard
                key={index}
                index={index}
                molecule={molecule}
                searchTerm={searchBarValue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* Function fetching the entire molecules data
Here I'm getting all the data linked to the molecule but on an actual backend I would only like to receive the displayed data in the card (name, description, medications);
*/
export function loader() {
  if (data.length === 0) return null;

  return data.molecules;
}
