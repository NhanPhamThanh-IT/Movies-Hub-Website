import { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MovieList from './components/MovieList/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en';
        const response = await fetch(url, options);

        if (!response.ok) throw new Error('Failed to fetch movies');

        const data = await response.json();
      
        if (isMounted) setMovies(data.results);
      } catch (error) {
        if (isMounted) setError(error.message);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        paddingBottom: '20px',
      }}
    >
      <Header />
      <Banner />

      {error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : (
        <>
          <MovieList title="Hot Movies" list_movies={movies} />
          <MovieList title="Recommend Movies" list_movies={movies.slice(0, 5)} />
        </>
      )}
    </div>
  );
}

export default App;
