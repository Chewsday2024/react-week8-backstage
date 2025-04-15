// import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';




import ContextProvider from './helpers/contextprovider/contextprovider';
import router from './router';



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/all.scss';




createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  //</StrictMode>,
)
