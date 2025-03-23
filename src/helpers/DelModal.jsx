import useHelpers from "./contextprovider/useHelpers";








function DelModal ({ page }) {
  const {
    inputValue,
    delProduct
  } = useHelpers();



  let pageDel;

  switch (page) {
    case 'products':
      pageDel = delProduct
      break
    
    
  }

  return (
    <div
      className="modal fade"
      id="delProductModal"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      data-bs-backdrop="static">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">刪除產品</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            你是否要刪除 
            <span className="text-danger fw-bold">{inputValue.title}</span>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => pageDel()}>
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelModal;