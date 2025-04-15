import { createHashRouter } from "react-router-dom";



import App from "./App";
import SideBar from "./layout/SideBar";
import Products from "./pages/products/Products";


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'backstage',
        element: <SideBar />,
        children: [
          {
            index: true,
            element: <Products />
          }
        ]
      }
    ]
  }
]);





export default router;