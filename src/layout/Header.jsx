import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";



import useHelpers from "../helpers/contextprovider/useHelpers";
import Loading from "../helpers/Loading";


const BASE_URL = import.meta.env.VITE_BASE_URL;



function Header () {
  const {
    setIsLoading
  } = useHelpers();

  useEffect(() => {
    ( async () => {
        try {
          setIsLoading(true);
    
          const res = await axios.post(`${BASE_URL}/v2/admin/signin`, {
            username: 'dog@gmail.com',
            password: '999888'
          });
    
          const { token, expired } = res.data;
    
          document.cookie = `dogfood=${token}; expires=${new Date(expired)}`;
    
        } catch (err) {
          toast.error(err);
    
        } finally {
          setIsLoading(false);
        }
    })
  }, [setIsLoading]);


  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)dogfood\s*=\s*([^;]*).*$)|^.*$/,"$1",);
    
    axios.defaults.headers.common['Authorization'] = token;
  }, []);


  return (
    <div className="bg-dark sticky-top">
      <div className="container">
        <nav className="navbar px-0 navbar-expand-lg navbar-light bg-dark py-5">
          <Link to='/backstage' className="navbar-brand position-absolute start-50 top-50 translate-middle text-white">
            <h1>React-Week8</h1>
          </Link>
        </nav>
      </div>

      <Loading />

      <Toaster />
    </div>
  );
};

export default Header;