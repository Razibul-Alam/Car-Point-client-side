
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './All-Pages/Home-Page/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Services from './All-Pages/Home-Page/Services/Services';
// import AddCar from './Admin-Page/AddCar';
import GiveReview from './Users-Page/Give-Review/GiveReview';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './Login-Page/LoginPage';
import Header from './All-Pages/Home-Page/Header/Header';
import NotFound from './Not-Found/NotFound';
import OrderPalace from './Order-Palace/OrderPalace';
import MyOrders from './Users-Page/My-Orders/MyOrders';
import RegisterPage from './Login-Page/RegisterPage';
import PrivateRoute from './Login-Page/PrivateRoute';
import ManageAllOrders from './Admin-Dashboard/ManageAllOrders';
import AdminDashboard from './Admin-Dashboard/AdminDashboard';
import CreateAdmin from './Admin-Dashboard/CreateAdmin';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Header/>
      <Switch>
        <Route exact path ='/'>
            <Home/>
        </Route>
        <Route exact path ='/services'>
            <Services/>
        </Route>
        {/* <Route exact path ='/addcar'>
            <AddCar/>
        </Route> */}
        <PrivateRoute exact path='/order/:orderId'>
 <OrderPalace/>
</PrivateRoute>
        <Route exact path='/myorders'>
 <MyOrders/>
</Route>
        <Route exact path='/manage-orders'>
 <ManageAllOrders/>
</Route>
        <Route exact path ='/give-review'>
            <GiveReview/>
        </Route>
        <Route exact path ='/login'>
            <LoginPage/>
        </Route>
        <Route exact path ='/register'>
            <RegisterPage/>
        </Route>
        <Route exact path ='/admin-dashboard'>
            <AdminDashboard/>
        </Route>
        <Route exact path ='/create-admin'>
            <CreateAdmin/>
        </Route>
        <Route exact path ='*'>
            <NotFound/>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
