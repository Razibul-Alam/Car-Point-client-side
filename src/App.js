
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './All-Pages/Home-Page/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Services from './All-Pages/Home-Page/Services/Services';
import AddCar from './Admin-Page/AddCar';
import GiveReview from './Users-Page/Give-Review/GiveReview';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './Login-Page/LoginPage';
import Header from './All-Pages/Home-Page/Header/Header';
import NotFound from './Not-Found/NotFound';
import OrderPalace from './Order-Palace/OrderPalace';

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
        <Route exact path ='/addcar'>
            <AddCar/>
        </Route>
        <Route exact path='/order/:orderId'>
 <OrderPalace/>
</Route>
        <Route exact path ='/give-review'>
            <GiveReview/>
        </Route>
        <Route exact path ='/login'>
            <LoginPage/>
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
