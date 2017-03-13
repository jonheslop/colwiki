import App from '../components/App'
import Header from '../components/Header'
import PostList from '../components/PostList'
import withData from '../lib/withData'
import Segment from '../components/StravaSegment'
import Map from '../components/Map'

export default withData((props) => (
  <App>
    <Header pathname={ props.url.pathname } query={ props.url.query } />
    <main role="main" className="ml7-ns dark-gray ph4">
      <PostList query={ props.url.query } />
      <Map />
    </main>
  </App>
))
