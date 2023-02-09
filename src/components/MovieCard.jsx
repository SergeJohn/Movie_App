export default function MovieCard({ Title, Year, Poster }) {
  return (
    <div className="container mx-auto p-5 mt-4 w-[200px] bg-sky-200">
      <img src={Poster} alt="image" />
      <div className="flex flex-col text-red-500 font-bold gap-2">
        <h3>{Title}</h3>
        <h3>{Year}</h3>
      </div>
    </div>
  );
}
