/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:57 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 09:33:32
 */
import React from 'react';
import {Router, Route, Switch, IndexRoute} from 'dva/router';

import App from './routes/index.js';

import Home from './routes/Home';
import Details from './routes/Home/Details'


const RouterConfig = ({history}) => {

  return (
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </App>
  );
}

export default RouterConfig;
