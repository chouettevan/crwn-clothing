import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { authStateChangeListener } from "./Utils/Firebase/firebase";
import Home from './Routes/Home/home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Signin from './Routes/Auth/authentication';
import Shop from './Routes/Shop/shop.routes';
import Checkout from './Routes/Checkout/checkout';
import { setCurrentUser } from './Store/user/user.actions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Unsubscribe = authStateChangeListener(user => 
      dispatch(setCurrentUser(user)))
    return Unsubscribe;
  // eslint-disable-next-line
  },[]);
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Signin/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
};
export default App;

