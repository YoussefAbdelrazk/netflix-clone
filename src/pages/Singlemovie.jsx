import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa";

const key = '77386456394a5350eec33d9c732153e9'
export default function Singlemovie() {
  const[movie,setMovie] = useState(null)
  const {id} = useParams()
  const FetchSingleMovie = async() => {
    try{
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      setMovie(data)
    }catch(err){
console.log(err)
    }
  }

  useEffect(()=>{
    FetchSingleMovie()
  },[])
  
console.log(movie)
const handleClick = () => {
  location.href = movie?.homepage
}


  return (
    <div className="w-full text-white h-screen  ">
        <img className=" w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
        <div className=" fixed inset-0 bg-black/50"></div>
        <div className=" absolute top-[20%] md:left-14 p-6">
          <h2 className="font-bold text-4xl">{movie?.title}</h2>
          <p className="text-red-600 font-semibold ">{movie?.tagline}</p>
          <p className="text-gray-300 my-8 max-w-lg ">{movie?.overview}</p>
          <div className="flex items-center space-x-1"><span className="text-red-600 font-semibold mr-2">VoteAverage:</span >{movie?.vote_average}<FaStar className=" text-yellow-400"/> </div>
          <p className=" text-gray-300 font-semibold my-6"> <span className="text-red-600 ">Budget:</span> {movie?.budget} $</p>
          <p > DATE : <span className="text-red-600">{movie?.release_date}</span></p>
          <button onClick={handleClick} className=" bg-red-600 px-8 py-2 my-4 rounded"> Visit Site  </button>
        
          
        </div>
    </div>
  )
}