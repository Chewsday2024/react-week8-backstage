import { createContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import useHelpers from "../../helpers/contextprovider/useHelpers";



const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;


export const productsContext = createContext(null);


export function ProductsContext ({ children }) {
  const {
    setIsLoading,
    setPageInfo,
    inputValue,
    setInputValue
  } = useHelpers();


  const [allProducts, setAllProducts] = useState([]);


  const fetchProducts = async ( page = 1) => {
    try {
      setIsLoading(true);

      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/admin/products?page=${page}`);

      setAllProducts(res.data.products);

      setPageInfo(res.data.pagination);

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };


  const updateInput = ({name, value, type, checked, del}) => {
    if (name === 'imagesUrl') {
      setInputValue({...inputValue,
                    imagesUrl: [value, ...inputValue.imagesUrl || []]
                    })

    } else if (del === 'del') {

      setInputValue({...inputValue, imageUrl: null});

    } else {
      setInputValue({...inputValue,
                    [name]: type === 'checkbox' ? checked 
                                                : value
                    })
    }
  };




  const upLoadPic = async (pic) => {
    try {
      const formData = new FormData();
      formData.append('file-to-upload', pic);

      const res = await axios.post(`${BASE_URL}/v2/api/${API_PATH}/admin/upload`, formData);
      
      setInputValue({...inputValue, imageUrl: res.data.imageUrl});
    } catch (err) {
      console.log(err);
    }
  };





  const createProduct = async () => {
    try {
      setIsLoading(true);

      const res = await axios.post(`${BASE_URL}/v2/api/${API_PATH}/admin/product`, {
        data: {
          ...inputValue,
          origin_price: Number(inputValue.origin_price),
          price: Number(inputValue.price),
          is_enabled: inputValue.is_enabled ? 1 : 0
        }
      });

      await fetchProducts();

      toast.success(res.data.message);

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };





  const editProduct = async () => {
    try {
      setIsLoading(true);

      const res = await axios.put(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${inputValue.id}`, {
        data: {
          ...inputValue,
          origin_price: Number(inputValue.origin_price),
          price: Number(inputValue.price),
          is_enabled: inputValue.is_enabled ? 1 : 0
        }
      });

      await fetchProducts();

      toast.success(res.data.message);

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  };




  const delProduct = async () => {
    try {
      setIsLoading(true);

      const res = await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${inputValue.id}`);

      await fetchProducts();

      toast.success(res.data.message);

    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }





  const source = {
    fetchProducts,
    allProducts,
    updateInput,
    upLoadPic,


    createProduct,
    editProduct,
    delProduct
  }

  return (
    <productsContext.Provider value={source}>
      {children}
    </productsContext.Provider>
  )
}