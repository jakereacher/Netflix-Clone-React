import React, { useState } from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MediaDiv from "../components/home/MediaDiv";
import MoviePopup from "../components/MoviePopup";

const Watchlist = () => {
  const { watchlist } = useWatchlist();
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold p-8">My Watchlist</h1>
      <div className="flex flex-wrap gap-4 px-8">
        {watchlist.length === 0 ? (
          <p>Your watchlist is empty.</p>
        ) : (
          watchlist.map((movie) => (
            <MediaDiv
              key={movie.id}
              img={movie.backdrop_path}
              name={movie.title || movie.name}
              movie={movie}
              onSelect={setSelectedMovie}
            />
          ))
        )}
      </div>
      {selectedMovie && (
        <MoviePopup
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};
export default Watchlist;
