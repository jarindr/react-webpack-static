import Helmet from 'react-helmet'
import React from 'react'
import { createMemoryHistory } from 'history'
import { match, RouterContext } from 'react-router'

import routes from './routes'

// Exported static site renderer
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  const stats = locals.webpackStats.toJson()
  const stylesheets = createStyleString(stats.publicPath, stats.assetsByChunkName.main)
  const ReactDOMServer = require('react-dom/server')
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) return callback(error)

    // This is a redirect route, generate a minimal redirecting page.
    if (redirectLocation) {
      const html = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>Redirect</title>
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="refresh" content="0;url=${redirectLocation}">
          </head>
          <body>
            <span style="font: caption">
              If you are not redirected automatically, <a href='${redirectLocation}'>follow the link to ${redirectLocation}</a>.
            </span>
            <script language="javascript">window.location.replace(${JSON.stringify(redirectLocation)})</script>
          </body>
        </html>
      `
      return callback(null, html)
    }

    // This is a non-redirecting route, so render it with ReactDOMServer.
    try {
      const element = <RouterContext {...renderProps} />
      const content = ReactDOMServer.renderToString(element)
      const head = Helmet.rewind()
      const html = `<!DOCTYPE html>
        <html ${head.htmlAttributes.toString()} >
          <head>
            <meta charset="UTF-8" />
            ${head.title.toString()}
            ${head.meta.toString()}
            <meta name="viewport" content="width=device-width">
            ${head.script.toString()}
            ${head.link.toString()}
            ${stylesheets}
          </head>
          <div id='app'>${content}</div>
          <script src='${locals.assets.main}'></script>
        </html>`
      callback(null, html)
    } catch (e) {
      console.error('Cannot render page: ' + locals.path)
      callback(e)
    }
  })
}

function createStyleString (publicPath, assets) {
  let stylesheets = assets.filter((file) => {
    return /\.css$/.test(file)
  })
  return stylesheets.map((file) =>
    `<link href='${publicPath}${file}' rel='stylesheet' />`
  ).join('')
}
