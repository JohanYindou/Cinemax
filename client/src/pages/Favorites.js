import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import cinemaxLogo from '../assets/cinemax-lg.png';

const Favorites = () => {
  // Liste des favoris
  const [favorites, setFavorites] = useState([]);
  // Résultat de chaque tour de la boucle OMDB
  const [movies, setMovies] = useState([]);
  const API = 'https://www.omdbapi.com/?apikey=1e6e9ace';

  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/favorites');
      const data = await response.json();
      if (data.favorites) {
        setFavorites(data.favorites);
      }
    } catch (error) {
      console.log(
        'Une erreur est survenue lors de la récupération des favoris: ' + error
      );
    }
  };

  const fetchMovies = async () => {
    const moviesArray = [];
    try {
      for (const item of favorites) {
        const response = await fetch(API + '&i=' + item.movie);
        const data = await response.json();
        moviesArray.push({
          imbdID: data.imbdID,
          Title: data.Title,
          Poster: data.Poster,
        });
        if (moviesArray.length > 0) {
          setMovies(moviesArray);
        }
      }
    } catch (error) {
      console.log(
        'Une erreur est survenue lors de la récupération des films : ' + error
      );
    }
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [favorites]);

  return (
    <>
      <div className='hero'>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        <h1>Favorites</h1>
      </div>
      <div>
        <Movies movies={movies} />
      </div>
    </>
  );
};

export default Favorites;
