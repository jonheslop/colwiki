import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'
import Link from 'next/link'
import PostItem from './PostItem'

const colID = "cj02jc4reoyv901562hivxwc5"

function PostSingle ({ data: { Post, loading } }) {
  if (loading) {
    return <div>Loading</div>
  }

  return (
    <section>
        <ul className="list pa0 mv4">
          <PostItem post={ Post } />
        </ul>
    </section>
  )
}

const Post = gql`
  query Post {
    Post(id: colID) {
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
