import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// import IndexPage from './routes/Home/index';
import LayOut from './routes/LayOut/index';
import Home from './routes/Home/index';
import Login from './routes/Login/login';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/" component={LayOut} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
