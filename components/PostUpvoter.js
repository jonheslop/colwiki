import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function PostUpvoter ({ upvote, votes, id }) {
  return (
    <button onClick={() => upvote(id, votes + 1)} className="flex ph3 pv2 items-center bg-transparent ba b--black-10 br1">
      {votes}
      <style jsx>{`
        button:hover {
            background-color: #cdecff;
        }
        button:before {
            align-self: center;
            border-color: transparent transparent #000000 transparent;
            border-style: solid;
            border-width: 0 5px 8px 5px;
            content: "";
            height: 0;
            margin-right: 8px;
            width: 0;
        }
      `}</style>
    </button>
  )
}

const upvotePost = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      votes
    }
  }
`

export default graphql(upvotePost, {
  props: ({ ownProps, mutate }) => ({
    upvote: (id, votes) => mutate({
      variables: { id, votes },
      optimisticResponse: {
        updatePost: {
          id: ownProps.id,
          votes: ownProps.votes + 1
        }
      }
    })
  })
})(PostUpvoter)
