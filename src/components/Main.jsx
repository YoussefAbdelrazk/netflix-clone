import axios from "axios"
import { useState,useEffect } from "react"
import requests from '../Requests';



export default function Main() {
  
  const [movies,setMovies] = useState([])
  const movie = movies[Math.floor(Math.random()* movies.length)]
  const FetchMovies = async()=>{
    try{
      const {data} = await axios.get(requests.requestPopular)
      setMovies(data.results)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    FetchMovies()
  },[])
  const Truncate = (str,num) => {
    if(str?.length > num){
      return str.slice(0, num) + '...'
    }else{
      return str
    }
    
  }
  
  return (
    <div className='w-full h-[600px] lg:h-[850px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[600px] lg:h-[850px] bg-gradient-to-r from-black'></div>
      <img
        className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
            Play
          </button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>
          Released: {movie?.release_date}
        </p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {Truncate(movie?.overview, 150)}
        </p>
      </div>
    </div>
  </div>
  )
}