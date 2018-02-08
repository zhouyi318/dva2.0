/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:07 
 * @Last Modified by:   周毅 
 * @Last Modified time: 2018-02-07 14:40:07 
 */
import React from 'react';
import {Router, Route, Switch, IndexRoute} from 'dva/router';

import App from './routes/App';

import Home from './routes/Home';
import Doc from './routes/Doc';
import Example from './routes/Example';
import My from './routes/My';


const RouterConfig = ({history}) => {

  return (
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doc" component={Doc} />
          <Route path="/example" component={Example} />
          <Route path="/my" component={My} />
        </Switch>
      </Router>
    </App>
  );
}

export default RouterConfig;
