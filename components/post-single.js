import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import Link from 'next/link'
import PostUpvoter from './post-voter'
import Segment from './strava-segment'
import AddImage from './add-image'
import MapGL from './map-gl'

function PostList({data: {Post}}) {
  if (Post) {
    return (
      <section>
        <MapGL segment={Post.segment}/>
        <header className="bg-near-white pa3 cf flex items-center bb b--black-20">
          <h1 className="ma0 items-start flex-auto">
            <Link key={Post.id} href={`/col?id=${Post.slug}`} prefetch>
              <a className="link dark-gray hover-black">
                { Post.name }
              </a>
            </Link>
          </h1>
          <PostUpvoter id={Post.id} votes={Post.votes}/>
        </header>
        <article className="pa3 bb b--black-20 cf">
          { Post.image ? <img className="v-mid fr w-50 w-third-ns" src={Post.image.url}/> : <AddImage Postid={Post.id}/> }
          <p className="ph2 lh-copy f5">{ Post.description }</p>
        </article>
        <Segment segment={Post.segment} containerClasses="pa3 w5-ns"/>
      </section>
    )
  }

  return <div className="pa4">Loading...</div>
}

const Post = gql`
  query Post($slug: String!) {
    Post(slug: $slug) {
      id
      name
      description
      segmentId
      votes
      slug
      segment
      image {
        url
      }
      createdAt
    }
  }
`

PostList.propTypes = {
  data: React.PropTypes.object
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(Post, {
  props: ({data}) => ({
    data
  })
})(PostList)
