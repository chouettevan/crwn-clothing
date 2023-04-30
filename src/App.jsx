import Home from './Routes/home/home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Signin from './Routes/Auth/authentication';
import Shop from './Routes/Shop/shop.main';
import Checkout from './Routes/Checkout/checkout';
import CategoryPage from './Routes/Shop/Category-Page/category';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:category' element={<CategoryPage/>}/>
        <Route path='auth' element={<Signin/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
};
export default App;

