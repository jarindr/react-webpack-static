import useScroll from 'react-router-scroll/lib/useScroll'
import React from 'react'
import { render } from 'react-dom'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'

import routes from './routes'

// Client renderer
if (typeof document !== 'undefined') {
  const app = document.getElementById('app')
  render(createRouter(routes), app)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const routes = require('./routes').default
      render(createRouter(routes), app)
    })
  }
}

function createRouter (routes, key) {
  return (
    <Router history={browserHistory} key={Date.now()} render={applyRouterMiddleware(useScroll())}>
      {routes}
    </Router>
  )
}
