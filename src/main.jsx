import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , Route ,createBrowserRouter,BrowserRouter } from 'react-router-dom'
import ProductList from './Components/ProductList/ProductList.jsx'
const router = createBrowserRouter([
    {
     path:"/",
     Component: <App/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <RouterProvider router={router} /> */}
   {/* <App/> */}
   
    <App />
 
  </React.StrictMode>,
)
