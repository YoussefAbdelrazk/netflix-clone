


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,HomeLayout } from './pages'

function App() {
const router = createBrowserRouter([
  {path:'/' ,element:<HomeLayout/> ,children:[
      {index:true ,element:<Home/>},
  ]}
])

  return (
  <>
      <RouterProvider router={router}/>
  </>
  )
}

export default App
