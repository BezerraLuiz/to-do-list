import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MenuPrincipal from './Components/MenuPrincipal.jsx';
import IniciarTask from './Routes/IniciarTask.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      path: '/',
      element: <MenuPrincipal/>
      },
      {
        path: 'iniciar_task',
        element: <IniciarTask/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
