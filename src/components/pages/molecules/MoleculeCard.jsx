import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MoleculeCard({ molecule, index, searchTerm }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteMolecules = localStorage.getItem("favoriteMolecules")
      ? JSON.parse(localStorage.getItem("favoriteMolecules"))
      : [];
    if (favoriteMolecules.includes(molecule.name)) {
      setIsFavorite(true);
    }
  }, [molecule.name]);

  function handleCardClick() {
    navigate(`/tekkare/molecules/${index}`);
  }

  function handleToggleFavorite(event) {
    event.stopPropagation();
    const favoriteMolecules = localStorage.getItem("favoriteMolecules")
      ? JSON.parse(localStorage.getItem("favoriteMolecules"))
      : [];
    if (isFavorite) {
      const updatedFavorites = favoriteMolecules.filter(
        (favMolecule) => favMolecule !== molecule.name
      );
      localStorage.setItem(
        "favoriteMolecules",
        JSON.stringify(updatedFavorites)
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
    <article
      className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white flex flex-col h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold text-left text-teal-900 font-serif border-b-4 border-teal-500 pl-4 w-1/2">
          {molecule.name}
        </h2>
        <i
          className={`fas fa-star text-xl ${
            isFavorite ? "text-yellow-500" : "text-gray-300"
          } pr-2`}
          onClick={handleToggleFavorite}
        />
      </header>
      <p className="border-b border-teal-200 p-4 text-justify flex-grow">
        {molecule.description}
      </p>
      <footer className="flex flex-wrap gap-2 py-2 px-4">
        {molecule.medications.map((medication, index) => {
          const medicationIsSearched =
            searchTerm.length > 0 &&
            medication.name.toLowerCase().includes(searchTerm.toLowerCase());
          return (
            <div
              key={index}
              className={`${
                medicationIsSearched ? "bg-black" : "bg-teal-600"
              } rounded-2xl px-2 py-1 text-white transition-bg duration-300`}
            >
              {medication.name.toLowerCase()}
            </div>
          );
        })}
      </footer>
    </article>
  );
}
