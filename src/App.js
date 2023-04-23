import Home from '../src/pages/home/Home.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import View from './pages/view/View';
import Add from './pages/add/Add.jsx';
import Login from './pages/login/Login.jsx';
import Order from './pages/order/Order.jsx';
import Notification from './pages/notification/Notification.jsx';
const App = () => {
  return (
      <>
      <Router>
       <Routes>
          <Route path="/" element={<Home/>} exact>    
          </Route>  
          <Route path="/user" element={<View/>} exact>    
          </Route>  
          <Route path="/Add" element={<Add/>} exact>    
          </Route>  
          <Route path="/order" element={<Order/>} exact>    
          </Route>  
          <Route path="/login" element={<Login/>} exact>    
          </Route>  
          <Route path="/notification" element={<Notification/>} exact>    
          </Route>  
        </Routes>
       </Router>
      </>
  )
}

export default App
