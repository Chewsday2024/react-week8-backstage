import { useContext } from "react";


import { context } from "./contextprovider";
import { loginContext } from "../../pages/login/loginContext";
import { productsContext } from "../../pages/products/productsContext";





function useHelpers () {
  const globalContext = useContext(context);

  const loginSource = useContext(loginContext);

  const productsSource = useContext(productsContext);

  
  return { 
    ...globalContext,
    ...loginSource,
    ...productsSource
  };
}



export default useHelpers;