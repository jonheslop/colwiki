import App from '../components/App'
import Header from '../components/Header'
import PostSingle from '../components/PostSingle'
import withData from '../lib/withData'

export default withData((props) => (
    <App>
        <Header pathname={props.url.pathname} />
        <main role="main" className="ml7-ns dark-gray ph4">
            <PostSingle query={props.url.query} />
        </main>
    </App>
))