import { useEffect } from "react";


import Modal from "./Modal";
import Pagination from "../../helpers/Pagination";
import useHelpers from "../../helpers/contextprovider/useHelpers";
import DelModal from "../../helpers/DelModal";


function Products () {
  const {
    fetchProducts,
    allProducts,
    pageInfo,
    handleModalInputValue
  } = useHelpers();


  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mt-4">
        <h2 className='m-0 fw-bold'>產品列表</h2>
        <button className="btn btn-primary" onClick={() => handleModalInputValue({move: 'create'})} data-bs-toggle="modal" data-bs-target="#productModal">建立新的產品</button>
      </div>

      <table className="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th width="120">產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        
        <tbody>
          {allProducts && allProducts.length > 0 ? (
            allProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.origin_price}</td>
                <td>{item.price}</td>
                <td>{item.is_enabled ? <span className="text-success">啟用</span> : <span>未啟用</span>}</td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => handleModalInputValue({move: 'edit', item})} data-bs-toggle="modal" data-bs-target="#productModal">
                      編輯
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleModalInputValue({move: 'del', item})} data-bs-toggle="modal" data-bs-target="#delProductModal">
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">尚無產品資料</td>
            </tr>
          )}
        </tbody>
      </table>


      {(pageInfo.has_next || pageInfo.has_pre) && <Pagination page={'products'} />}

      <Modal />

      <DelModal page={'products'} />

    </div>
  );
};

export default Products;