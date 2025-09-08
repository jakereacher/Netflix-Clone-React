import React, { useEffect, useState } from "react";
import TrendingBox from "./TrendingBox";

const Trending = () => {

  const [trending, setTrending] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTVlZjBhMzkwNmJlNGQxMWZiZjVmNWIxYzBkOWJlOSIsIm5iZiI6MTc0NTUwMjY0Ni43NTAwMDAyLCJzdWIiOiI2ODBhNDFiNjE0MmIwOWNlY2Y4YTQ2YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LwG5-ScDmC5w2SfYAdA2RKvip3YRbSa5x4Rdt_KGdug'
    }
  };
  
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(res => {console.log(res.results), setTrending(res.results)})
    .catch(err => console.error(err));
  }, [])


  return (
    <div className="mt-5 lg:mt-14 z-10 relative">
      <h1 className="text-3xl font-bold text-white mb-4">Trending Now</h1>

      <div className="flex justify-between">
        {trending.slice(0, 8).map((item, index) => (
          <div key={index} className="flex ">
            <TrendingBox image={item.backdrop_path} index={index} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Trending;
