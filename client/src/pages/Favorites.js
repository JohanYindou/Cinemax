import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/favorites')
      .then((res) => res.json())
      .then((data) => setFavorites(data.favorites));
  },[])

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorites.id}>{favorite.movie}</li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
