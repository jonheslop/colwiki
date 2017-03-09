import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'

const POSTS_PER_PAGE = 10

function PostList ({ data: { allPosts, loading, _allPostsMeta }, loadMorePosts }) {
  if (loading) {
    return <div>Loading</div>
  }

  const areMorePosts = allPosts.length < _allPostsMeta.count

  return (
    <section>
      <ul className="list pa0">
        {allPosts.map((post, index) =>
          <li key={post.id}>
              <h2 className="bg-near-white pa2">{post.name} <abbr title="Strava Segment ID" className="code f6 fr">{ post.segmentId }</abbr></h2>
              <p className="ph2">{ post.description }</p>

              {/* <PostUpvoter id={post.id} votes={post.votes} /> */}
          </li>
        )}
      </ul>
      {areMorePosts ? <button onClick={() => loadMorePosts()}><span />Show More</button> : ''}
    </section>
  )
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      name
      description
      segmentId
      createdAt
    },
    _allPostsMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.data) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.data.allPosts]
          })
        }
      })
    }
  })
})(PostList)
