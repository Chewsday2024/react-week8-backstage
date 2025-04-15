import { useContext } from "react";


import { context } from "./contextprovider";
import { productsContext } from "../../pages/products/productsContext";





function useHelpers () {
  const globalContext = useContext(context);

  const productsSource = useContext(productsContext);

  
  return { 
    ...globalContext,
    ...productsSource
  };
}



export default useHelpers;