import React from 'react';
import AddCar from './../Admin-Page/AddCar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
const AdminDashboard = () => {
    let { path, url } = useRouteMatch();
    console.log(path,url)

    return (
        <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}`}>Add car</Link>
          </li>
          <li>
            <Link to={`${url}/testing`}>testing</Link>
          </li>
          <li>
            <Link to={`${url}/addcar`}>testing</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <AddCar/>
          </Route>
          <Route path={`${path}/addcar`}>
            <AddCar/>
          </Route>
          <Route path={`${path}/testing`}>
            <Testing/>
          </Route>
        </Switch>
      </div>
    );
};
function Testing() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    
  
    return (
      <div>
        <h3>topicId</h3>
      </div>
    );
  }

export default AdminDashboard;