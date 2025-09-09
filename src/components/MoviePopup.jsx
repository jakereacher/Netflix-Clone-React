import React, { useEffect, useState } from "react";
import { useWatchlist } from "../context/WatchlistContext"; // <-- import this!

const TMDB_API_KEY = "23de376c429b57034682aa132f4da2cd";

const MoviePopup = ({ movie, onClose }) => {
  const [trailer, setTrailer] = useState(null);

  // Watchlist context
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(movie.id);

  useEffect(() => {
    if (!movie) return;
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const trailerVid = data.results?.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        setTrailer(trailerVid ? trailerVid.key : null);
      });
  }, [movie]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      style={{ backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 rounded-lg shadow-xl max-w-2xl w-[90%] p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl"
        >
          &times;
        </button>
        {trailer && (
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            width="100%"
            height="240"
            title="Trailer"
            allowFullScreen
            className="mb-4 rounded"
          />
        )}
        <h2 className="text-3xl font-bold mb-2">{movie.title || movie.name}</h2>
        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="bg-gray-700 rounded px-2">
            {(movie.release_date || "").slice(0, 4)}
          </span>
          <span className="bg-gray-700 rounded px-2">Movie</span>
        </div>
        <p className="mb-3 text-white/90">{movie.overview}</p>
        <div className="flex gap-4 mt-5">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
            ▶ Watch
          </button>
          {!inWatchlist ? (
            <button
              className="bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition"
              onClick={() => addToWatchlist(movie)}
            >
              + Add to Watchlist
            </button>
          ) : (
            <button
              className="bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-800 transition"
              onClick={() => removeFromWatchlist(movie.id)}
            >
              ✔ In Watchlist (Remove)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
