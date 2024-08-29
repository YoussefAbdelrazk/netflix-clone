export default function Navbar() {
  return (
    <div className="flex items-center justify-between absolute w-full p-6 z-[100]">
      <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded">Sign Up</button>
      </div>
    </div>
  )
}