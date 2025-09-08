import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import { TiMediaPlay } from "react-icons/ti";
import { MdInfoOutline } from "react-icons/md";
import HeroButton from "../Buttons/HeroButton";

const TitleCard = () => {
  const [apiData, setApiData] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTVlZjBhMzkwNmJlNGQxMWZiZjVmNWIxYzBkOWJlOSIsIm5iZiI6MTc0NTUwMjY0Ni43NTAwMDAyLCJzdWIiOiI2ODBhNDFiNjE0MmIwOWNlY2Y4YTQ2YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LwG5-ScDmC5w2SfYAdA2RKvip3YRbSa5x4Rdt_KGdug",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day",
          options
        );
        const data = await res.json();
        console.log("Fetched Data:", data);
        setApiData(data.results);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!apiData.length) return;
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % apiData.length);
      setImageKey((prev) => prev + 1);
      setImageLoaded(false);
    }, 10000);
    return () => clearInterval(interval);
  }, [apiData]);

  const currentMovie = apiData[currentMovieIndex];
  const heroImageUrl = currentMovie
    ? `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`
    : "/hero.jpg";


  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>


      <img
        key={imageKey}
        src={heroImageUrl}
        alt="Hero background"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80 z-20" />

  
      {currentMovie && (
        <div className="absolute bottom-72 left-14 z-30 w-[600px]">
          <h1 className="text-white text-7xl font-bold mb-4 font-sans">
            {currentMovie.title}
          </h1>
          <p className="text-xl mb-4">{currentMovie.overview}</p>
          <div className="flex gap-6">
            <HeroButton
              Icon={TiMediaPlay}
              name="Play"
              bgColor="bg-gray-200"
              textColor="text-black"
              hover="hover:bg-gray-300"
              id={currentMovie.id}
            />
            <HeroButton
              Icon={MdInfoOutline}
              name="More Info"
              bgColor="bg-gray-600/80"
              textColor="text-gray-100"
              hover="hover:bg-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleCard;
