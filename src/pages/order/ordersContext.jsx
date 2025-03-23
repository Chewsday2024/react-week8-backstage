import { createContext, useState } from "react";
import axios from "axios";


import useHelpers from "../../helpers/contextprovider/useHelpers";



const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;


export const ordersContext = createContext(null);



export function OrdersContext ({ children }) {
  const {
    setIsLoading,
    setPageInfo
  } = useHelpers();

  const [allOrders, setAllOrders] = useState([]);



  const fetchOrders = async ( page = 1) => {
    try {
      setIsLoading(true);

      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/admin/orders?page=${page}`);

      console.log(res.data.orders);

      setAllOrders(res.data.orders);

      setPageInfo(res.data.pagination);

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };




  const delOrder = async ( id ) => {
    try {
      const res = await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/admin/order/${id}`);

      console.log(res);

      await fetchOrders();
    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  }




  const orderSource = {
    fetchOrders,
    allOrders,
    delOrder
  }



  return (
    <ordersContext.Provider value={orderSource}>
      {children}
    </ordersContext.Provider>
  )
}