import React, { useEffect, useRef, useState } from "react";
import MediaDiv from "./MediaDiv";

const MediaList = () => {
  const scrollRefs = useRef([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);
  const [horrorMovie, setHorrorMovie] = useState([]);

  const mediaSections = [
    { heading: "Popular Movies", data: popularMovie },
    { heading: "Top Trending", data: topRated },
    { heading: "Horror Movies", data: horrorMovie },
    { heading: "Series", data: series },
  ];

  const handleWheel = (event, ref) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    scrollRefs.current.forEach((ref) => {
      if (ref) {
        const handler = (e) => handleWheel(e, { current: ref });
        ref.addEventListener("wheel", handler, { passive: false });
        return () => ref.removeEventListener("wheel", handler);
      }
    });
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTVlZjBhMzkwNmJlNGQxMWZiZjVmNWIxYzBkOWJlOSIsIm5iZiI6MTc0NTUwMjY0Ni43NTAwMDAyLCJzdWIiOiI2ODBhNDFiNjE0MmIwOWNlY2Y4YTQ2YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LwG5-ScDmC5w2SfYAdA2RKvip3YRbSa5x4Rdt_KGdug",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Popular Movies:", res.results);
        setPopularMovie(res.results);
      })
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Top Trending:", res.results);
        setTopRated(res.results);
      })
      .catch((err) => console.error(err));
    fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => setHorrorMovie(res.results))
      .catch((err) => console.error("Error fetching data:", err));

    fetch("https://api.themoviedb.org/3/tv/top_rated?page=1", options)
      .then((res) => res.json())
      .then((res) => {
        console.log("Seies:", res.results);
        setSeries(res.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative -mt-56 z-50">
      {mediaSections.map((section, index) => (
        <div key={index} className="px-16">
          <h1 className="text-3xl font-semibold mt-2 mb-1">
            {section.heading}
          </h1>
          <div
            ref={(el) => (scrollRefs.current[index] = el)}
            className="flex gap-3 overflow-x-auto"
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {section.data.map((item, i) => (
              <MediaDiv
                key={i}
                img={item.backdrop_path}
                name={item.original_title || item.original_name}
                id={item.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaList;
