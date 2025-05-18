import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Components/Home/Home/Home.jsx'
import Login from './Components/Home/Login/Login.jsx'
import SignUp from './Components/Home/Signup/SignUp.jsx'
import Register from './Components/Home/Register/Register.jsx'
import AuthProvider from './Components/Home/AuthContext/AuthProvider.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  Component:Root,
  children:[
    {
index:true, 
Component:Home
   },
   { path:'login' ,
     Component:Login},
   {
    path:'signup',
    Component:SignUp
   },
   {
    path:'register',
    Component:Register
   }
  ]
}
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </StrictMode>,
)
