import React from 'react'
import gql from 'graphql-tag'
import slugify from 'slug'
import fetch from 'isomorphic-fetch'
import {graphql} from 'react-apollo'

function Submit({createPost}) {
  async function handleSubmit(e) {
    e.preventDefault()

    let name = e.target.elements.name.value
    let description = e.target.elements.description.value
    let segmentId = parseInt(e.target.elements.segmentId.value, 10)
    let slug = slugify(e.target.elements.name.value, {lower: true})

    if (name === '' || description === '' || segmentId === '') {
      for (let element of e.target.elements) {
        if (!element.className.includes('submit')) {
          element.classList.add('b--red')
        }
      }
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
      <h1>Add a Col</h1>
      <div className="cf">
        <div className="pv2 dib pr4">
          <label htmlFor="name" className="f6 fw5 db mb2">Col Name</label>
          <input className="tofino pa2 input-reset ba bg-transparent b--black-20" placeholder="name" name="name"/>
        </div>
        <div className="pv2 dib">
          <label htmlFor="segmentId" className="f6 fw5 db mb2">Strava segment ID</label>
          <input className="tofino pa2 input-reset ba bg-transparent b--black-20" placeholder="4714703" name="segmentId" pattern="\d*"/>
        </div>
      </div>
      <div className="pv2">
        <label htmlFor="comment" className="f6 fw5 db mb2">Description <span className="normal black-60">(optional)</span></label>
        <textarea name="description" className="tofino db border-box hover-black w-100 measure ba b--black-20 pa2 mb2" placeholder="Tell us a story&hellip;" aria-describedby="comment-desc"/>
        <input type="submit" className="tofino fw4 submit ph3 pv2 input-reset ba bg-dark-gray near-white hover-bg-red b--white pointer f6" value="Submit"/>
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

Submit.propTypes = {
  createPost: React.PropTypes.func
}

export default graphql(createPost, {
  props: ({mutate}) => ({
    createPost: (name, description, segmentId, slug, segment) => mutate({
      variables: {name, description, segmentId, slug, segment},
      updateQueries: {
        allPosts: (previousResult, {mutationResult}) => {
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
