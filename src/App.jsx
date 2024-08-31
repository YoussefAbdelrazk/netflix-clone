import { ToastContainer } from "react-toastify";


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home,HomeLayout,Login,Signup,Account,Singlemovie } from './pages'
import { AuthProvider } from './context/Authcontext'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
const router = createBrowserRouter([
  {path:'/' ,element:  <ProtectedRoute><HomeLayout/></ProtectedRoute> ,children:[
      {index:true ,element:<Home/>},
    
      {path:'/account',element:<Account/>},
      {path:'/movie/:id',element:<Singlemovie/>},
  ]},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<Signup/>},
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
