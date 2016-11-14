import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import RequireAuth from './components/auth/RequireAuth';

import App from './components/app';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Welcome from './components/Welcome';

import rootReducer from './reducers';
import DevTools from './components/DevTools'



export default function configureStore(initialState){
  const createStoreWithMiddleWare =  createStore(
        rootReducer,
        initialState,
          compose(
            applyMiddleware(reduxThunk),
            DevTools.instrument())
          )
    return createStoreWithMiddleWare;
  }

  const store = configureStore({});


  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome}/>
          <Route path="signin" component={Signin}/>
          <Route path="signout" component={Signout}/>
          <Route path="signup" component={Signup}/>
          <Route path="feature" component={RequireAuth(Feature)} />
        </Route>
      </Router>
    </Provider>
  , document.querySelector('.container'));
