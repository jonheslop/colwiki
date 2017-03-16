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
                let bgColor, color, donger, message
                [bgColor, color, donger, message] = ["near-white", "black-20", "", "Drag photo here"]
                if (isDragActive) {
                  [bgColor, color, donger, message] = ["washed-yellow", "red", "༼つ ் ▽ ் ༽つ", "Ok, let go, we got this"]
                }
                if (isDragReject) {
                  [bgColor, color, donger, message] = ["washed-red", "red", "¯_| ಠ ∧ ಠ |_/¯", "Images only please"]
                }
                if (acceptedFiles != 0) {
                  [bgColor, color, donger, message] = ["washed-green", "green", "ᕙ( ~ . ~ )ᕗ", "Uploading&hellip;"]
                }
                return (
                  <DropzoneMessage bgColor={bgColor} donger={donger} color={color} message={message} />
                )
            }}
          </Dropzone>}
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} role='presentation' className='w-100 v-mid ba b--dark-gray border-box' />
          }
          {this.state.imageUrl &&
            <button className='w-100 b ph3 pv2 input-reset ba bg-dark-gray near-white hover-bg-red b--white pointer f6' onClick={this.handlePost}>Save to entry</button>
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
