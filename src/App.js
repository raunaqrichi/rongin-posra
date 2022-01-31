import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import initializeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddAProduct from './Components/AddAProduct/AddAProduct';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MyOrders from './Components/MyOrders/MyOrders';
import Pay from './Components/Pay/Pay';
import Review from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';


initializeAuthentication();
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/Explore'>
        <Explore></Explore>
        </Route>
        <Route exact path='/Home'>
        <Home></Home>
        </Route>
        <Route exact path='/Contact'>
        <Contact></Contact>
        </Route>
        <PrivateRoute exact path='/ManageAllOrders'>
        <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <PrivateRoute exact path='/AddAProduct'>
        <AddAProduct></AddAProduct>
        </PrivateRoute>
        <PrivateRoute exact path='/MakeAdmin'>
        <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path='/ManageProducts'>
        <ManageProducts></ManageProducts>
        </PrivateRoute>
        <PrivateRoute path='/MyOrders'>
        <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path='/Review'>
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path='/Pay'>
        <Pay></Pay>
        </PrivateRoute>
        
        
         <PrivateRoute exact path='/Booking/:Id'>
        <Booking></Booking>
        </PrivateRoute> 
        <Route exact path='/LogIn'>
        <LogIn></LogIn>
        </Route>
       <Route exact path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
      
      
     
      </AuthProvider>
    </div>
  );
}

export default App;
