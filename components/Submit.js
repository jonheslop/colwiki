import gql from 'graphql-tag'
import slugify from 'slug'
import { graphql } from 'react-apollo'

function Submit ({ createPost }) {
  async function handleSubmit (e) {
    e.preventDefault()

    let name = e.target.elements.name.value
    let description = e.target.elements.description.value
    let segmentId = parseInt(e.target.elements.segmentId.value)
    let slug = slugify(e.target.elements.name.value, {lower: true})

    if (name === '' || description === '' || segmentId === '') {
      window.alert('All fields are required.')
      return false
    }

    const res = await fetch('https://www.strava.com/api/v3/segments/' + segmentId + '?access_token=5b5d96d72e2a68787801cd193668a83de0bc41ff')
    const segment = await res.json()

    console.log(segment)

    createPost(name, description, segmentId, slug, segment)

    // reset form
    e.target.elements.name.value = ''
    e.target.elements.description.value = ''
    e.target.elements.segmentId.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="pv4 mb4 bb bw1 b--black-10">
      <h1>Submit a Col</h1>
      <div className="cf">
        <div className="pv2 dib pr4">
          <label htmlFor="name" className="f6 b db mb2">Col Name</label>
          <input className="pa2 input-reset ba bg-transparent b--black-20 br1" placeholder='name' name='name' />
        </div>
        <div className="pv2 dib">
          <label htmlFor="segmentId" className="f6 b db mb2">Strava segment ID</label>
          <input className="pa2 input-reset ba bg-transparent b--black-20 br1" placeholder='4704703' name='segmentId' pattern="\d*" />
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
  mutation createPost($name: String!, $description: String!, $segmentId: Int!, $slug: String!, $segment: Json!) {
    createPost(name: $name, description: $description, segmentId: $segmentId, slug: $slug, segment: $segment) {
      id
      name
      description
      segmentId
      votes
      slug
      segment
      createdAt
    }
  }
`

export default graphql(createPost, {
  props: ({ mutate }) => ({
    createPost: (name, description, segmentId, slug, segment) => mutate({
      variables: { name, description, segmentId, slug, segment },
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