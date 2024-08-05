import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Home from './features/Home'
import Login from './features/Auth.js/Login'
import Signup from './features/Auth.js/Signup'
import NewCode from './features/NewCode'
import CodeEdit from './features/code/CodeEdit'
import UserRoute from './ui/UserRoute'
const router = createBrowserRouter([{
path:'/',
element:<RouteLayout/>,
children:[

  {index:true,element:<Home/>},

  {element:<UserRoute/>,
    children:[
      {path:'login',element:<Login/>},
      {path:'signup',element:<Signup/>},
    ]
  },
  
]
},
{path:'compiler',element:<NewCode/>},
{path:'codedit/:id',element:<CodeEdit/>},

])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
