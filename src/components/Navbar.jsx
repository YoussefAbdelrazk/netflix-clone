import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between absolute w-full p-6 z-[100]">
      <Link className=" cursor-pointer" to={'/'}>
    
      <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      </Link>
      <div>
        <Link className=" cursor-pointer" to={'login'}>
        <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link className=" cursor-pointer" to={'signup'}>
            <button className="bg-red-600 text-white px-6 py-2 rounded">Sign Up</button>
        </Link>
      
      </div>
    </div>
  )
}