import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";



import useHelpers from "../helpers/contextprovider/useHelpers";
import Loading from "../helpers/Loading";


const BASE_URL = import.meta.env.VITE_BASE_URL;



function Header () {
  const {
    checkIsUserLogin,
    setIsLogin,
    isLogin,
    setIsLoading
  } = useHelpers();

  const navigate = useNavigate();


  const userLogout = async () => {
    try {
      setIsLoading(true);

      const res = await axios.post(`${BASE_URL}/v2/logout`);

      res.data.success && setIsLogin(false);

    } catch (err) {
      console.log(err);

    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    checkIsUserLogin();
  }, []);


  useEffect(() => {
    !isLogin && navigate('/');
  }, [isLogin, navigate]);


  return (
    <div className="bg-dark sticky-top">
      <div className="container">
        <nav className="navbar px-0 navbar-expand-lg navbar-light bg-dark">
          <Link to='/backstage' className="navbar-brand position-absolute start-50 top-50 translate-middle text-white">
            React-Week8
          </Link>

          <button
            className="btn border-2 border-white ms-auto text-white"
            type="button"
            onClick={userLogout}
            >
            登出
          </button>
        </nav>
      </div>

      <Loading />

      <Toaster />
    </div>
  );
};

export default Header;