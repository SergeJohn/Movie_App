import React from "react";

const NavBar = ({ search, setSearch, searchByTitle }) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center pt-10">
      <h1 className="text-2xl font-serif mb-2 ">Sergy MovieLand</h1>
      <form
        onSubmit={searchByTitle}
        className="container flex justify-between bg-white shadow p-4 rounded-full"
      >
        <input
          type="text"
          placeholder="Search...."
          className="outline-none text-black"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="p-2 text-red-700 bg-slate-200 rounded-full"
          onClick={searchByTitle}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default NavBar;
