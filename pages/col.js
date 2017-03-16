import App from '../components/app'
import Header from '../components/header'
import PostList from '../components/post-list'
import withData from '../lib/withData'

export default withData(props => (
  <App>
    <Header pathname={ props.url.pathname } query={ props.url.query } />
    <main role="main" className="ml7-ns dark-gray ph4">
      <PostList query={ props.url.query } />
    </main>
  </App>
))
