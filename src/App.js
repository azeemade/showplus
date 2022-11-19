import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Movies } from './components/Movie';
import { Search } from './components/Search';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=6145b6af`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        setMovies(jsonResponse.Search);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  const handleClear = () => {
    setMovies([])
    setSearch("")
  }

  return (
    <div className='items-center justify-start flex flex-col'>
      <div className='w-[600px]'>
        <Header title="Showplus"/>
        <Search search={search} handleChange={handleChange} />
        <Movies movies={movies} loading={loading} />
        {
          movies.length > 0 &&
            <div className="flex justify-center items-center mt-2 mb-5">
              <button className="py-2 px-6 bg-neutral-500 text-white rounded border-neutral-500 text-sm" 
                  type="submit" onClick={handleClear}>Clear All Data</button>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
