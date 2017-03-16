import React from 'react'
import Link from 'next/link'
import PostUpvoter from './post-voter'
import Segment from './strava-segment'
import AddImage from './add-image'
import MapGL from './map-gl'
import MapStatic from './map-static'

const PostItem = ({post, hasQuery}) => (
  <li className="mb4 ba b--black-20">
    <header className="bg-near-white pa3 cf flex items-center bb b--black-20">
      <h2 className="ma0 items-start flex-auto">
        <Link key={post.id} href={`/col?id=${post.slug}`} prefetch>
          <a className="link dark-gray hover-black">
            { post.name }
          </a>
        </Link>
      </h2>
      <PostUpvoter id={post.id} votes={post.votes}/>
    </header>
    <article className="pa3 bb b--black-20 cf">
      { post.image ? <img className="v-mid fr w-50 w-third-ns" src={post.image.url}/> : <AddImage postid={post.id}/> }
      <p className="ph2 lh-copy f6">{ post.description }</p>
    </article>
    <Segment segment={post.segment}/>
    { hasQuery ? <MapGL segment={post.segment}/> : <MapStatic segment={post.segment}/> }
  </li>
)

PostItem.propTypes = {
  post: React.PropTypes.object,
  hasQuery: React.PropTypes.bool
}

export default PostItem
