import React from 'react'
import App from '../components/app'
import Header from '../components/header'
import PostSingle from '../components/post-single'
import withData from '../lib/with-data'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} query={props.url.query}/>
    <main role="main" className="ml7-ns dark-gray">
      <PostSingle slug={props.url.query.id}/>
    </main>
  </App>
))
