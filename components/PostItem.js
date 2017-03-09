import Link from 'next/link'
import PostUpvoter from './PostUpvoter'

export default ({ post }) => (
  <li className="mb4">
      <header className="bg-near-white pa2 cf flex items-center">
          <h2 className="ma0 items-start flex-auto">
              <Link key={ post.id } href={`/col?${ post.id }`}>
                  <a className="link dark-gray hover-black">
                      { post.name }
                  </a>
              </Link>
          </h2>
          <PostUpvoter id={ post.id } votes={ post.votes } />
      </header>
      <p className="ph2 lh-copy">{ post.description }  <abbr title="Strava Segment ID" className="code f6">{ post.segmentId }</abbr></p>
  </li>
)
