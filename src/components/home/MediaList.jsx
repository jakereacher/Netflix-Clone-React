import React, { useRef, useState, useEffect } from "react";
import MediaDiv from "./MediaDiv";
import MoviePopup from "../MoviePopup"; // adjust path if needed

const TMDB_API_KEY = "23de376c429b57034682aa132f4da2cd";

const mediaEndpoints = [
  {
    heading: "Popular Movies",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: "Top Trending",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: "Horror Movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&page=1`,
  },
  {
    heading: "Series",
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&page=1`,
  },
];

const MediaList = () => {
  const scrollRefs = useRef([]);
  const [mediaData, setMediaData] = useState([[], [], [], []]);
  const [cardWidth] = useState(220);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    mediaEndpoints.forEach((endpoint, idx) => {
      fetch(endpoint.url)
        .then((res) => res.json())
        .then((res) => {
          setMediaData((prev) => {
            const newData = [...prev];
            newData[idx] = res.results || [];
            return newData;
          });
        })
        .catch((err) => console.error(err));
    });
  }, []);

  const handleArrowClick = (idx, direction) => {
    const container = scrollRefs.current[idx];
    const itemCount = mediaData[idx].length;
    if (!container || itemCount === 0) return;
    const visibleCards = Math.floor(container.clientWidth / cardWidth) || 1;
    const scrollAmount = visibleCards * cardWidth;
    let nextScrollLeft;

    if (direction === "right") {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - cardWidth) {
        nextScrollLeft = 0;
      } else {
        nextScrollLeft = container.scrollLeft + scrollAmount;
      }
    } else {
      if (container.scrollLeft <= 0) {
        nextScrollLeft = container.scrollWidth - container.clientWidth;
      } else {
        nextScrollLeft = container.scrollLeft - scrollAmount;
      }
    }
    container.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
  };

  return (
    <div className="relative -mt-56 z-50">
      {mediaEndpoints.map((section, idx) => (
        <div
          key={idx}
          className="px-16 relative"
          style={{ marginBottom: "35px" }}
        >
          <h1 className="text-3xl font-semibold mt-2 mb-1">{section.heading}</h1>
          <button
            onClick={() => handleArrowClick(idx, "left")}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/80 text-white rounded-full p-2"
            style={{ fontSize: "2rem", pointerEvents: "all" }}
            aria-label="Scroll Left"
          >
            &#8592;
          </button>
          <div
            ref={(el) => (scrollRefs.current[idx] = el)}
            className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar"
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              minHeight: "12rem",
            }}
          >
            {mediaData[idx].map((item, i) => (
              <MediaDiv
                key={item.id || i}
                img={item.backdrop_path}
                name={item.original_title || item.original_name}
                movie={item}
                onSelect={setSelectedMovie}
              />
            ))}
          </div>
          <button
            onClick={() => handleArrowClick(idx, "right")}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/80 text-white rounded-full p-2"
            style={{ fontSize: "2rem", pointerEvents: "all" }}
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      ))}
      {/* Movie Popup */}
      {selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default MediaList;
