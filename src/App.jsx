import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Feeds from "./components/Feeds";
import { fetchApi } from "./utils/fetchApi";
function App() {
  const URL = `http://www.omdbapi.com/?s=batman&apikey=fba6d265`;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await fetchApi(URL);
    setMovies(data.Search);
  };

  const searchByTitle = async (e) => {
    e.preventDefault();
    try {
      const { data } = await fetchApi(
        `http://www.omdbapi.com/?s=${search}&apikey=fba6d265`
      );
      setMovies(data.Search);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-600 text-white">
      <NavBar
        search={search}
        setSearch={setSearch}
        searchByTitle={searchByTitle}
      />
      <Feeds movies={movies} />
    </div>
  );
}

export default App;
