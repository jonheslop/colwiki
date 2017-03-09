import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'
import Link from 'next/link'

// const colID = props.url.query
// console.log(colID)

function PostSingle ({ data: { Post, loading, _allPostsMeta } }) {
  return (
    <section>
        <ul className="list pa0 mv4">
            <Link key={Post.id} href={`/col?${ Post.id }`}>
                <a className="link dark-gray hover-black">
                    <li className="mb4">
                        <header className="bg-near-white pa2 cf">
                            <h2 className="fl ma0">{Post.name}</h2>
                            <PostUpvoter id={Post.id} votes={Post.votes} />
                        </header>
                        <p className="ph2 lh-copy">{ Post.description }  <abbr title="Strava Segment ID" className="code f6">{ Post.segmentId }</abbr></p>
                    </li>
                </a>
            </Link>
        </ul>
    </section>
  )
}

const Post = gql`
  query Post {
    Post(id: "cj02jc4reoyv901562hivxwc5") {
      id
      name
      description
      segmentId
      votes
      createdAt
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostSingle)
export default graphql(Post)(PostSingle)
