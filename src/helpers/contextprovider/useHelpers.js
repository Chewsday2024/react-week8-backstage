import { useContext } from "react";


import { context } from "./contextprovider";
import { loginContext } from "../../pages/login/loginContext";
import { productsContext } from "../../pages/products/productsContext";
import { ordersContext } from "../../pages/order/ordersContext";
import { couponContext } from "../../pages/coupon/couponContext";




function useHelpers () {
  const globalContext = useContext(context);

  const loginSource = useContext(loginContext);

  const productsSource = useContext(productsContext);

  const orderSource = useContext(ordersContext);

  const couponSource = useContext(couponContext);

  
  return { 
    ...globalContext,
    ...loginSource,
    ...productsSource,
    ...orderSource,
    ...couponSource
  };
}



export default useHelpers;