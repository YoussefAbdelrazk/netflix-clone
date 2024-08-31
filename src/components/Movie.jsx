import { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa'
import { db } from '../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'
import { useAuthContext } from '../context/Authcontext'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function Movie({item}) {
  const {user} = useAuthContext()
const [Like,setLike] = useState(false)
const [saved,setSaved] = useState(false)

const movieID= doc(db,'users',`${user?.email}`)

const saveShow = async() => {
  if(user?.email){
    setLike(!Like)
    setSaved(true)
    await updateDoc(movieID,{
      savedShows:arrayUnion({
        id:item.id,
        title:item.title,
        img:item.backdrop_path
      })
    })
    toast.success('movie saved successfully')
  }else{
    toast.error('please log in to save a movie')
  }
}



  return (
    <div  className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative">
              <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
              <div className=" absolute inset-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white duration-200 ">
                <Link to={`/movie/${item.id}`} className="text-xs md:text-sm whitespace-normal flex justify-center items-center h-full" >{item?.title}</Link>
                <p onClick={saveShow}>
                  {Like ? <FaHeart size={20} className=" absolute top-4 left-4 text-gray-300"/> : <FaRegHeart size={20} className=" absolute top-4 left-4 text-gray-300"/>} 
                 </p>
              </div>
            </div>
  )
}