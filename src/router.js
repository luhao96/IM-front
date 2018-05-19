import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import Main from './routes/main/Main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/main" component={Main} />
    </Router>
  );
}

export default RouterConfig;
