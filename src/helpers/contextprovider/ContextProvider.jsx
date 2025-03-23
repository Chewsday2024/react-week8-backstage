import { createContext, useState } from "react";


import { LoginContext } from "../../pages/login/loginContext";
import { ProductsContext } from "../../pages/products/productsContext";
import { OrdersContext } from "../../pages/order/ordersContext";
import { CouponContext } from "../../pages/coupon/couponContext";



export const context = createContext(null);



function ContextProvider ({ children }) {

  const [isLoading, setIsLoading] = useState(false);

  const [pageInfo, setPageInfo] = useState({});



  const defaultValue = {
    imageUrl: '',
    title: '',
    category: '',
    unit: '',
    origin_price: '',
    price: '',
    description: '',
    content: '',
    is_enabled: 0,
    imagesUrl: []
  };


  const [inputValue, setInputValue] = useState(defaultValue);

  const [modalMove, setModalMove] = useState('');


  const handleModalInputValue = ({ move, item }) => {

    setModalMove(move);

    switch (move) {
      case 'create':
        setInputValue({
          ...inputValue,
          imageUrl: '',
          title: '',
          category: '',
          unit: '',
          origin_price: '',
          price: '',
          description: '',
          content: '',
          is_enabled: 0,
          imagesUrl: []});
        break;

      case 'edit':
        setInputValue({
          ...item,
          imageUrl: item.imageUrl,
          title: item.title,
          category: item.category,
          unit: item.unit,
          origin_price: item.origin_price,
          price: item.price,
          description: item.description,
          content: item.content,
          is_enabled: item.is_enabled,
          imagesUrl: item.imagesUrl
        });
        
        break;


      case 'del':
        setInputValue(item);
        
        break;
    
      default:
        break;
    }
  };



  const source = {
    isLoading,
    setIsLoading,
    pageInfo,
    setPageInfo,
    handleModalInputValue,
    inputValue,
    setInputValue,
    modalMove
  }
  
  return (
    <context.Provider value={source}>
      <LoginContext>
        <ProductsContext>
          <OrdersContext>
            <CouponContext>
              {children}
            </CouponContext>
          </OrdersContext>
        </ProductsContext>
      </LoginContext>
    </context.Provider>
  )
}



export default ContextProvider;