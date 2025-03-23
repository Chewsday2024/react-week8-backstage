import { createContext, useState } from "react";
import axios from "axios";


import useHelpers from "../../helpers/contextprovider/useHelpers";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;



export const couponContext = createContext(null);



export function CouponContext ({ children }) {
  const { setIsLoading, setPageInfo } = useHelpers();

  const [allCoupons, setAllCoupons] = useState([]);


  const fetchCoupon = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/admin/coupons`);

      console.log(res);

      setAllCoupons(res.data.coupons);

      setPageInfo(res.data.pagination);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }


  const couponSource = {
    fetchCoupon,
    allCoupons
  }

  return (
    <couponContext.Provider value={couponSource}>
      {children}
    </couponContext.Provider>
  )
}