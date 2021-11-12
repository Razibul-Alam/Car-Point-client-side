import React from 'react';
import AddCar from './../Admin-Page/AddCar';
import ManageAllOrders from './ManageAllOrders';
  import {
  Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import CreateAdmin from './CreateAdmin';
import useAuth from './../Hooks/useAuth';
import MyOrders from '../Users-Page/My-Orders/MyOrders';
import GiveReview from '../Users-Page/Give-Review/GiveReview';
import Payment from './Payment';
import ManageProducts from './ManageProducts';
import { Button } from 'react-bootstrap';
const AdminDashboard = () => {
    let { path, url } = useRouteMatch();
    console.log(path,url)
const{admin,logOut}=useAuth()
    return (
        <div className='row'>
<div className='col-lg-3 col-sm-12'>
        <h2>Dashboard</h2>
      { admin&& <ul>
          {/* <li>
            <Link to={`${url}`}>
              Dashboard</Link>
          </li> */}
          <li>
            <Link to={`${url}/addcar`}>Add Car</Link>
          </li>
          <li>
            <Link to={`${url}/manage-products`}>Manage Products</Link>
          </li>
          <li>
            <Link to={`${url}/create-admin`}>Create Admin</Link>
          </li>
          <li>
            <Link to={`${url}/manage-orders`}>Manage Orders</Link>
          </li>
          <li><Button onClick={logOut}>Logout</Button></li>
        </ul>}
        

      { !admin&& <ul>
          {/* <li>
            <Link to={`${url}`}>
              Dashboard</Link>
          </li> */}
          <li>
            <Link to={`${url}/my-orders`}>My Orders</Link>
          </li>
          <li>
            <Link to={`${url}/review`}>Review</Link>
          </li>
          <li>
            <Link to={`${url}/payment`}>Payment</Link>
          </li>
          <li><Button onClick={logOut}>Logout</Button></li>
        </ul>}
  </div>
  <div className='col-lg-8'>
        <Switch>
          <Route exact path={path}>
            {admin?<ManageAllOrders/>:<MyOrders/>}
          </Route>
          <Route path={`${path}/addcar`}>
            <AddCar/>
          </Route>
          <Route path={`${path}/manage-orders`}>
            <ManageAllOrders/>
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts/>
          </Route>
          <Route path={`${path}/create-admin`}>
            <CreateAdmin/>
          </Route>
          {/* user */}
          <Route path={`${path}/my-orders`}>
            <MyOrders/>
          </Route>
          <Route path={`${path}/review`}>
            <GiveReview/>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment/>
          </Route>
        </Switch>
        </div>
      </div>
    );
};

export default AdminDashboard;