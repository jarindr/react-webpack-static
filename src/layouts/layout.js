import './Layout.global.styl'

import Helmet from 'react-helmet'
import React from 'react'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[
            {innerHTML: require('raw!../FontLoader.js'), 'type': 'text/javascript'}
          ]}
          link={[
          ]}
          meta={[
          ]}
        />
        {this.props.children}
      </div>
    )
  }
})

export default Layout
