import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ButtonPage from './components/pages/ButtonPage.jsx';
import './global.scss';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/button',
    element: <ButtonPage/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
