import React from 'react'
import { Route, IndexRoute } from 'react-router'

import HomePage from '../src/home/Homepage'
import Layout from '../src/layouts/layout'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
    </Route>
  </div>
)
