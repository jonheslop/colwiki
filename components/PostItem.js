import Link from 'next/link'
import PostUpvoter from './PostUpvoter'
import Segment from './StravaSegment'
import Map from './Map'

export default ({ post, hasQuery }) => (
  <li className="mb4 ba b--black-20">
    <header className="bg-near-white pa3 cf flex items-center bb b--black-20">
      <h2 className="ma0 items-start flex-auto">
        <Link key={ post.id } href={`/col?id=${ post.slug }`} prefetch>
          <a className="link dark-gray hover-black">
            { post.name }
          </a>
        </Link>
      </h2>
      <PostUpvoter id={ post.id } votes={ post.votes } />
    </header>
    <Segment segment={ post.segment } />
    <div className="dtc-ns pa3 pt0-ns">
      <p className="ph2 lh-copy f6">{ post.description }</p>
    </div>
    { hasQuery ? <Map segment={ post.segment } /> : '' }
  </li>
)
