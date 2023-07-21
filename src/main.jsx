import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Error from './pages/Error.jsx';

const rota = createBrowserRouter([
  {
  path:'/',
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
    path:'home',
    element: <Home/>
    },
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={rota}/>
  </React.StrictMode>,
)