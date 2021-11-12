
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './All-Pages/Home-Page/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './Login-Page/LoginPage';
import Header from './All-Pages/Home-Page/Header/Header';
import NotFound from './Not-Found/NotFound';
import OrderPalace from './Order-Palace/OrderPalace';
import RegisterPage from './Login-Page/RegisterPage';
import PrivateRoute from './Login-Page/PrivateRoute';
import AdminDashboard from './Dashboard/AdminDashboard';
import Explore from './Explore/Explore';
import AboutMain from './About-Page/AboutMain';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Header/>
      <Switch>
        <Route exact path ='/'>
            <Home/>
        </Route>
        <Route exact path ='/about'>
            <AboutMain/>
        </Route>
        <PrivateRoute exact path='/order/:orderId'>
 <OrderPalace/>
</PrivateRoute>
        <Route exact path='/explore'>
 <Explore/>
</Route>
        <Route exact path ='/login'>
            <LoginPage/>
        </Route>
        <Route exact path ='/register'>
            <RegisterPage/>
        </Route>
        <PrivateRoute path ='/dashboard'>
            <AdminDashboard/>
        </PrivateRoute>
        <Route exact path ='*'>
            <NotFound/>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
