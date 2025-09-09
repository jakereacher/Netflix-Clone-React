import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist(list =>
      list.some(m => m.id === movie.id) ? list : [...list, movie]
    );
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(list => list.filter(m => m.id !== movieId));
  };

  const isInWatchlist = (movieId) =>
    watchlist.some(movie => movie.id === movieId);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
