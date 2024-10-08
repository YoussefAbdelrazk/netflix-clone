import SavedShow from "../components/SavedShow";

export default function Account() {
  return (
    <>
    <div className=" w-full text-white">
      <img
    className=' w-full h-[400px] object-cover'
    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
    alt='/'
  />
  <div className=" fixed inset-0 bg-black/60 w-full h-[550px]"></div>
  <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>

    </div>
    <SavedShow/>
    </>
    
    
  )
}