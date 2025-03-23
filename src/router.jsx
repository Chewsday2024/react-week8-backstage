import { createHashRouter } from "react-router-dom";



import App from "./App";
import SideBar from "./layout/SideBar";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Orders from "./pages/order/Orders";
import Coupon from "./pages/coupon/Coupon";




const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'backstage',
        element: <SideBar />,
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: 'orders',
            element: <Orders />
          },
          {
            path: 'coupon',
            element: <Coupon />
          }
        ]
      }
    ]
  }
]);





export default router;