import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTVlZjBhMzkwNmJlNGQxMWZiZjVmNWIxYzBkOWJlOSIsIm5iZiI6MTc0NTUwMjY0Ni43NTAwMDAyLCJzdWIiOiI2ODBhNDFiNjE0MmIwOWNlY2Y4YTQ2YmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LwG5-ScDmC5w2SfYAdA2RKvip3YRbSa5x4Rdt_KGdug'
        }
      };
      
      useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      })


  return (
    <div className='h-screen relative flex flex-col justify-center items-center'>
        <div onClick={() => navigate("/")} className='absolute z-20 top-4 left-4 cursor-pointer'><IoArrowBackCircleOutline className='text-5xl' /></div>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" frameborder="0" title='Trailer' allowFullScreen></iframe>

        <div className='w-[90%] absolute z-20 bottom-2 flex justify-between'>
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player