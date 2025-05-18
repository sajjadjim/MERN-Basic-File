import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Laptop from './components/Laptops/Laptop.jsx';
import Mobile from './components/Mobiles/Mobile.jsx';
import User from './components/Users/User.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UsersDetails/userDetails.jsx';


const useData = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, children:[
      {index:true , Component: Home},{
        path:'laptop' , Component: Laptop
      },
      {
        path:"mobile" , Component:Mobile
      },
      {path:'users', 
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User},
        {
          path:'users2',
          element: <Suspense fallback={<span>Data Loading ......</span>}>
           <Users2 useData={useData}></Users2>
          </Suspense>
        },
        {
          path:'user/:userId',
          loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          ,Component :UserDetails
        }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
