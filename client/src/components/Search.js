import React from "react";

// Ce composant rprésente la barre de recherche
const Search = ({ search, setSearch, searchMovies }) => {
  // On paramètre la fonction hundleSubmit pour récuperer la valeure
  const handleSubmit = (e) => {
    // On récupère la valeur
    e.preventDefault();

    // On affecte la valeur à la fonction de recherche
    searchMovies(search);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel film rechercher vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
};
export default Search;
