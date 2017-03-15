import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function PostUpvoter ({ upvote, votes, id }) {
  return (
    <div className="flex items-center">
      <button onClick={() => upvote(id, votes + 1)} className="upvote flex pa2 items-center bg-transparent ba b--black-10 br1 mr2" />
      {votes}
      <button onClick={() => upvote(id, votes - 1)} className="downvote flex pa2 items-center bg-transparent ba b--black-10 br1 ml2" />
      <style jsx>{`
        button:hover {
            background-color: #cdecff;
        }
        .upvote:before {
            align-self: center;
            border-color: transparent transparent #000000 transparent;
            border-style: solid;
            border-width: 0 5px 8px 5px;
            content: "";
            height: 0;
            width: 0;
        }
        .downvote:before {
            align-self: center;
            border-color: #000000 transparent transparent transparent;
            border-style: solid;
            border-width: 8px 5px 0 5px;
            content: "";
            height: 0;
            width: 0;
        }
        `}</style>
      </div>
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
          votes: ownProps.votes
        }
      }
    })
  })
})(PostUpvoter)
