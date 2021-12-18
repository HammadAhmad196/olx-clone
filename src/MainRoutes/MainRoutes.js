import React from 'react'
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdDetails from "../pages/AdDetails/AdDetails";
import Register from "../pages/SignUp/Register";
import Search from "../pages/Search/Search";
import Category from "../pages/Category/Category";
import MyAds from "../pages/MyAds/MyAds";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/register" component={Register} exact></Route>
            <Route path="/ad/:id" component={AdDetails} exact></Route>
            <Route path="/ad/:id?" component={AdDetails} exact />
            <Route path="/myads" component={MyAds} exact></Route>
            <Route path="/category/:cat" component={Category} exact></Route>
            <Route path="/search/:keyword" component={Search} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
