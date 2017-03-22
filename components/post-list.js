import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import PostItem from './post-list-item'

const POSTS_PER_PAGE = 10

function PostList({data: {allPosts, loading, _allPostsMeta}, loadMorePosts}) {
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count

    return (
      <section>
        <ul className="list pa0 mv4">
          {allPosts.map(post =>
            <PostItem key={post.id} post={post}/>
        )}
        </ul>
        {areMorePosts ? <button onClick={loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
      </section>
    )
  }
  return <div>Loading</div>
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: votes_DESC, first: $first, skip: $skip) {
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
    },
    _allPostsMeta {
      count
    }
  }
`

PostList.propTypes = {
  data: React.PropTypes.object,
  loadMorePosts: React.PropTypes.func
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({data}) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, {fetchMoreResult}) => {
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
