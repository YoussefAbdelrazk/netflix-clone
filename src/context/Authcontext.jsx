import { createContext, useContext, useEffect, useState } from "react";


import { auth } from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth'
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [ user,setUser] = useState({})

  const SignUp= (email,password) => {

    return createUserWithEmailAndPassword(auth,email,password)
  }

  const Login = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const Logout = () => {
    return signOut(auth)
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  
  

  return <AuthContext.Provider value={{Login,Logout,SignUp,user}}>
    {children}
  </AuthContext.Provider>
  
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

