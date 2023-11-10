import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Nav from '../components/Nav';
import cinemaxLogo from '../assets/cinemax-lg.png';

const Favorites = () => {
  // Liste des favoris
  const [favorites, setFavorites] = useState([]);
  // Résultat de chaque tour de la boucle OMDB
  const [movies, setMovies] = useState([]);
  const API = 'https://www.omdbapi.com/?apikey=1e6e9ace';

  /**
   * Ici on fetch l'api express avec le contenu du fichier JSON (data.json)
   * Ensuite nous mettons notre state favorites à jour avec les données de l'api
   * Attention la sturcture de base du fetch étant un tableau principal, il faut
   * cibler le contenu qui se trouve dans celui-ci (data.favorites)
   */

  const fetchFavorites = async () => {
    try {
      /**
       * On initialise une boucle "for of" afin de s'assurer que chaque
       * tour de la boucle soit terminé avant de passer au suivant sans
       * problème
       */
      const response = await fetch('/api/favorites');
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
          imdbID: data.imdbID,
          Title: data.Title,
          Poster: data.Poster,
        });
      }
      if (moviesArray.length > 0) {
        setMovies(moviesArray);
      }
    } catch (error) {
      console.log(
        'Une erreur est survenue lors de la récupération des films : ' + error
      );
    }
  };

  // On lance la récupération des favoris dans le JSON
  useEffect(() => {
    fetchFavorites();
  }, []);

  /**
   * On lance la récupération des films dans l'API OMDB
   * Seulement lorsque le state favorites est mis à jour
   */
  useEffect(() => {
    fetchMovies();
  }, [favorites]);

  return (
    <>
      <Nav />
      <div className="App">
        <div className="Hero">
          <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
          <h1>Favorites</h1>
        </div>
        <div>
          <Movies movies={movies} />
        </div>
      </div>
    </>
  );
};

export default Favorites;
