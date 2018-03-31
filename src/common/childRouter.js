import {Redirect, Route, Router, Switch} from "dva/router";
import dynamic from 'dva/dynamic';
import Home from '../routes/Home/index';
import Order from '../routes/Order/index';
import Custer from '../routes/Manage/Custer/index'

export function childRouter() {
  return (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/order" component={Order}/>
      <Route path='/custer' component={Custer}/>
    </Switch>
  );
}
