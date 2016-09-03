import React from 'react'
import { Route, IndexRoute } from 'react-router'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
  </div>
)
