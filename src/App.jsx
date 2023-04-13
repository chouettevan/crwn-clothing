import Home from './routes/home/home';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Signin from './routes/Auth/authentication';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<h1>HI</h1>}/>
        <Route path='signIn' element={<Signin/>}/>
      </Route>
    </Routes>
  )
};
export default App;

