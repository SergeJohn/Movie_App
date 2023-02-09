import MovieCard from "./MovieCard";

const NotFound = () => {
  return (
    <div className="container h-screen bg-white text-black flex items-center justify-center">
      <h1 className="text-xl"> 404 no results Found!!</h1>
    </div>
  );
};

export default function Feeds({ movies }) {
  const map = movies?.map((item) => {
    return <MovieCard key={item.imdbID} {...item} />;
  });

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-xl font-serif text-start ">Movie Results.....</h1>
      <div className="container flex flex-wrap">
        {movies ? map : <NotFound />}
      </div>
    </div>
  );
}
