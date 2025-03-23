import useHelpers from "./contextprovider/useHelpers";

function Pagination ({ page }) {
  const {
    fetchProducts,
    fetchOrders,
    pageInfo } = useHelpers();


  let fetchItems;

  switch ( page ) {
    case 'products': 
      fetchItems = fetchProducts;
      break;
    
    case 'orders':
      fetchItems = fetchOrders;
      break;
  }
  
  return (
    <div className={`d-flex justify-content-center ${pageInfo.total_pages === 0 && 'd-none'}`}>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${!pageInfo.has_pre && 'disabled'}`}>
            <button onClick={() => fetchItems(pageInfo.current_page - 1)} className="page-link">
              上一頁
            </button>
          </li>

          
          {Array.from({ length: pageInfo.total_pages }).map(( _, index ) => (
            <li className={`page-item ${pageInfo.current_page === index + 1 && 'active'}`} key={index}>
              <button onClick={() => fetchItems(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          
          
          <li className={`page-item ${!pageInfo.has_next && 'disabled'}`}>
            <button onClick={() => fetchItems(pageInfo.current_page + 1)} className="page-link">
              下一頁
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;