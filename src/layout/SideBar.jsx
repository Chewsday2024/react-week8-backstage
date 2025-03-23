import { Link, Outlet } from "react-router-dom";


import Header from "./Header";
import Footer from "./Footer";
import Loading from "../helpers/Loading";








function SideBar () {
  return (
    <>
      <Header />


      <div className="row w-100 vh-100">
        <div className="col-2 mt-3">
          <ul className="d-flex flex-column gap-3 list-unstyled text-center">
            <li>
              <Link className="btn border-0">
                <h3>產品管理</h3>
              </Link>
            </li>

            <li>
              <Link to='orders' className="btn border-0">
                <h3>訂單管理</h3>
              </Link>
            </li>

            <li>
              <Link to='coupon' className="btn border-0">
                <h3>優惠券管理</h3>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-10">

          <Outlet />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default SideBar;