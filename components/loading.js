import React from 'react'

const Loading = ({title}) => (
  <div className="bg-near-white dark-gray flex items-center vh-50 justify-center">
    <h3>{ title || 'Loading...' }</h3>
  </div>
)

Loading.propTypes = {
  title: React.PropTypes.string
}

export default Loading
