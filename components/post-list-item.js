import React from 'react'
import Link from 'next/link'
import PostUpvoter from './post-voter'
import Segment from './strava-segment'
import AddImage from './add-image'
import MapStatic from './map-static'

const PostItem = ({post}) => (
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
      { post.image ? <img className="v-mid fr w-50 w-third-ns pl3" src={post.image.url}/> : <AddImage postid={post.id}/> }
      <div className="ph2">
        <h3 className="f6 ttu tracked">Summary</h3>
        <p className="f5 lh-copy measure">{ post.description }</p>
      </div>
    </article>
    <Segment segment={post.segment} containerClasses="pa3 dtc-ns br b--black-20 w5-ns" content="list"/>
    <MapStatic segment={post.segment}/>
  </li>
)

PostItem.propTypes = {
  post: React.PropTypes.object,
  hasQuery: React.PropTypes.bool
}

export default PostItem
