import { Link, Outlet } from "react-router-dom";


import Header from "./Header";
import Footer from "./Footer";
import Loading from "../helpers/Loading";








function SideBar () {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row w-100 vh-100 ps-3">
          <div className="col-2 mt-4">
            <ul className="d-flex flex-column gap-3 list-unstyled">
              <li>
                <Link className="btn border-0 p-0">
                  <h2 className="fw-bold">產品管理</h2>
                </Link>
              </li>

              <li>
                <h5>待新增頁面...</h5>
              </li>
            </ul>
          </div>

          <div className="col-10">

            <Outlet />

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SideBar;