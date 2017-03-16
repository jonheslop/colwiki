import React from 'react'
import App from '../components/app'
import Header from '../components/header'
import Submit from '../components/submit'
import PostList from '../components/post-list'
import withData from '../lib/with-data'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} query={props.url.query}/>
    <main role="main" className="ml7-ns dark-gray ph4">
      <Submit/>
      <PostList/>
    </main>
  </App>
))
