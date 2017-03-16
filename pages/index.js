import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withData from '../lib/withData'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} query={props.url.query} />
    <main role="main" className="ml7-ns dark-gray ph4">
      <Submit />
      <PostList />
    </main>
  </App>
))
