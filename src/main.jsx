import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Viewstorie from './Compontes/Viewstorie.jsx'
import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom'
import Profile from './Profile.jsx'
const createroute=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:"error"
    },
    {
      path:"/story/:id/:total",
      element:<Viewstorie />
    },
    {
      path:'/Profile',
      element:<Profile />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={createroute} />
)
