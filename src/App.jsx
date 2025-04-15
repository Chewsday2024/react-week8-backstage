import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('backstage')
  }, [navigate]);

  
  return (
    <Outlet />
  )
}

export default App
