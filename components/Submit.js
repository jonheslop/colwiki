import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function Submit ({ createPost }) {
  function handleSubmit (e) {
    e.preventDefault()

    let name = e.target.elements.name.value
    let description = e.target.elements.description.value
    let segmentId = parseInt(e.target.elements.segmentId.value)

    if (name === '' || description === '' || segmentId === '') {
      window.alert('All fields are required.')
      return false
    }

    createPost(name, description, segmentId)

    // reset form
    e.target.elements.name.value = ''
    e.target.elements.description.value = ''
    e.target.elements.segmentId.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="pt4">
      <h1>Submit a Col</h1>
      <div className="cf">
          <div className="pv2 dib pr4">
              <label htmlFor="name" className="f6 b db mb2">Col Name</label>
              <input className="pa2 input-reset ba bg-transparent b--black-20 br1" placeholder='name' name='name' />
          </div>
          <div className="pv2 dib">
              <label htmlFor="segmentId" className="f6 b db mb2">Strava segment ID</label>
              <input className="pa2 input-reset ba bg-transparent b--black-20 br1" placeholder='646754645' name='segmentId' pattern="\d*" />
          </div>
     </div>
      <div className="pv2">
          <label htmlFor="comment" className="f6 b db mb2">Description <span className="normal black-60">(optional)</span></label>
          <textarea name="description" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br1 mb2" placeholder="Tell us a story&hellip;" aria-describedby="comment-desc"></textarea>
          <button type='submit' className="b ph3 pv2 input-reset ba bg-dark-gray near-white bg-dark-gray pointer f6">Submit</button>
      </div>
    </form>
  )
}

const createPost = gql`
  mutation createPost($name: String!, $description: String!, $segmentId: Int!) {
    createPost(name: $name, description: $description, segmentId: $segmentId) {
      id
      name
      description
      segmentId
      votes
      createdAt
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (name, description, segmentId) => mutate({
      variables: { name, description, segmentId },
      updateQueries: {
        allPosts: (previousResult, { mutationResult }) => {
          const newPost = mutationResult.data.createPost
          return Object.assign({}, previousResult, {
            // Append the new post
            allPosts: [newPost, ...previousResult.allPosts]
          })
        }
      }
    })
  })
})(Submit)
