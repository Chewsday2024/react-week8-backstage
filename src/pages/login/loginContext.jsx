import { createContext, useState } from "react";
import axios from "axios";


import useHelpers from "../../helpers/contextprovider/useHelpers";



const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginContext = createContext(null);



export function LoginContext ({ children }) {
  const { setIsLoading } = useHelpers();

  const [isLogin, setIsLogin] = useState(false);

  const userLogin = async ( accountData ) => {
    try {
      setIsLoading(true);

      const res = await axios.post(`${BASE_URL}/v2/admin/signin`, accountData);

      setIsLogin(res.data.success);

      const { token, expired } = res.data;

      document.cookie = `dogfood=${token}; expires=${new Date(expired)}`;

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };





  const checkIsUserLogin = async () => {

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)dogfood\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
    
    axios.defaults.headers.common['Authorization'] = token;

    try {
      setIsLoading(true);

      await axios.post(`${BASE_URL}/v2/api/user/check`);

    } catch (err) {
      setIsLogin(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };




  const loginSource = {
    isLogin,
    setIsLogin,
    userLogin,
    checkIsUserLogin
  }


  return (
    <loginContext.Provider value={loginSource}>
      {children}
    </loginContext.Provider>
  )
}