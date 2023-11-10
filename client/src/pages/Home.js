import { useEffect, useState } from 'react';
import cinemaxLogo from '../assets/cinemax-lg.png';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Nav from '../components/Nav';

export default function App() {
  // OMDB API
  const API = 'https://www.omdbapi.com/?apikey=1e6e9ace';

  // States (Etats)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // Fonction : searchMovies()
  const searchMovies = async (searchValue) => {
    // Fetch de l'API OMDB
    const response = await fetch(`${API}&s=${searchValue}`);
    const data = await response.json();

    // On modifie le tableau si l'API retourne des données
    if (data.Search) {
      setMovies(data.Search);
    }

    // Vérifier les infos rçu par l'API
    console.log(data.Search);
  };

  // useEffect pour lancer la recherche des films
  useEffect(() => {
    searchMovies('');
  }, []);
  return (
    <>
      <Nav />
      <div className="App">
        <header>
          <img src={ cinemaxLogo } className="logo" alt="logo cinemax" />
          <div className='Hero'>
            <h1>
              Recherche
            </h1>
          </div>
          <Search
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
          />
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}
