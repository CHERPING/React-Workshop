import './App.css';
import Navigation from './component/Navigation';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Member from './component/page/Member';
import Product from './component/page/Product';
import Admin from './component/page/Admin';



function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="member" element={<Member/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="admin" element={<Admin/>}/>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
