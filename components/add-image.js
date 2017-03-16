import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Dropzone from 'react-dropzone'
import DropzoneMessage from './dropzone-message'

class CreatePage extends React.Component {

  static propTypes = {
    router: React.PropTypes.object,
    updatePost: React.PropTypes.func,
  }

  state = {
    id: this.props.postid,
    imageUrl: '',
    imageId: ''
  }

  render () {
    return (
      <div className='fr w-50 w-third-ns'>
        <input hidden name="id" value={this.state.id} readOnly />
          {!this.state.imageId &&
          <Dropzone
            onDrop={this.onDrop}
            accept='image/*'
            multiple={false}
            style={{}}>
            {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                const dropzoneProps = {
                  bgColor: "near-white",
                  color: "black-20",
                  donger: "",
                  message: "Drag photo here"
                }
                if (isDragActive) {
                  dropzoneProps.bgColor = "washed-yellow"
                  dropzoneProps.color = "gold"
                  dropzoneProps.donger = "༼つ ் ▽ ் ༽つ"
                  dropzoneProps.message = "Ok, let go, we got this"
                }
                if (isDragReject) {
                  dropzoneProps.bgColor = "washed-red"
                  dropzoneProps.color = "red"
                  dropzoneProps.donger = "¯_| ಠ ∧ ಠ |_/¯"
                  dropzoneProps.message = "Images only please"
                }
                if (acceptedFiles != 0) {
                  dropzoneProps.bgColor = "washed-green"
                  dropzoneProps.color = "green"
                  dropzoneProps.donger = "ᕙ( ~ . ~ )ᕗ"
                  dropzoneProps.message = "Uploading&hellip;"
                }
                return (
                  <DropzoneMessage bgColor={dropzoneProps.bgColor} donger={dropzoneProps.donger} color={dropzoneProps.color} message={dropzoneProps.message} />
                )
            }}
          </Dropzone>}
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} role='presentation' className='w-100 v-mid ba b--dark-gray border-box' />
          }
          {this.state.imageUrl &&
            <button className='w-100 b ph3 pv2 input-reset ba bg-dark-gray near-white hover-gold b--dark-gray pointer f6' onClick={this.handlePost}>Save to entry</button>
          }
      </div>
    )
  }

  onDrop = (files) => {
    // prepare form data, use data key!
    let data = new FormData()
    data.append('data', files[0])

    // use the file endpoint
    fetch('https://api.graph.cool/file/v1/cj02g7yzebouj0134967izx9f', {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json()
    }).then(image => {
      this.setState({
        imageId: image.id,
        imageUrl: image.url,
      })
    })
  }

  handlePost = async () => {
    const {id, imageId} = this.state
    await this.props.updatePost({variables: { id, imageId }})
  }
}

const addMutation = gql`
  mutation updatePost($id: ID!, $imageId: ID!) {
    updatePost(id: $id, imageId: $imageId) {
      id
      image {
        url
      }
    }
  }
`

const PageWithMutation = graphql(addMutation, { name: 'updatePost' })(CreatePage)

export default PageWithMutation
