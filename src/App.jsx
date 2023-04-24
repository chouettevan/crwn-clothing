import Home from './routes/home/home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Signin from './routes/Auth/authentication';
import Shop from './routes/Shop/shop';
import Checkout from './routes/Checkout/checkout';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Signin/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
};
export default App;

