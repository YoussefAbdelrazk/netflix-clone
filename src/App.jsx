


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,HomeLayout,Login,Signup,Account } from './pages'
import { AuthProvider } from './context/Authcontext'

function App() {
const router = createBrowserRouter([
  {path:'/' ,element:<HomeLayout/> ,children:[
      {index:true ,element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/signup',element:<Signup/>},
      {path:'/account',element:<Account/>},
  ]}
])

  return (
  <>
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
      
  </>
  )
}

export default App
