import { useEffect } from "react";
import useHelpers from "../../helpers/contextprovider/useHelpers";
import Pagination from "../../helpers/Pagination";








function Orders () {
  const {
    allOrders,
    fetchOrders,
    pageInfo
  } = useHelpers();



  useEffect(() => {
    fetchOrders();
  }, [])


  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mt-4">
        <h2 className='m-0 fw-bold'>訂單列表</h2>
      </div>

      <table className="table mt-4">
        <thead>
          <tr>
            <th width="120">訂單ID</th>
            <th width="120">訂購人</th>
            <th width="120">購買項目數量</th>
            <th width="120">訂單總金額</th>
            <th width="100">是否付款</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        
        <tbody>
          {allOrders && allOrders.length > 0 ? (
            allOrders.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user.name}</td>
                <td>{Object.keys(item.products).length}</td>
                <td>{item.total}</td>
                <td>{item.is_paid ? <span className="text-success">已付款</span> : <span>未付款</span>}</td>
                <td>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleModalInputValue({move: 'edit', item})} data-bs-toggle="modal" data-bs-target="#productModal">
                      編輯
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleModalInputValue({move: 'del', item})} data-bs-toggle="modal" data-bs-target="#delProductModal">
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


      {(pageInfo.has_next || pageInfo.has_pre) && <Pagination page={'orders'} />}

      {/* <Modal /> */}

    </div>
  );
};

export default Orders;