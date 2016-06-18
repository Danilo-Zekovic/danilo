/**
  * Danilo Zekovic
  * Shell.js
  * used to navigate the client side,
  * it connects all the modules and functionality of the app
  */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

import Header from './modules/Header'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    <Route path="/h" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
