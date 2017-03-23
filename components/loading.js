import React from 'react'

const Loading = ({title}) => (
  <div className="bb b--black-20">
    <div className="dark-gray flex items-center vh-50 justify-center" style={{backgroundColor: '#ede6dd'}}>
      <h3>{ title || 'Loading...' }</h3>
    </div>
  </div>
)

Loading.propTypes = {
  title: React.PropTypes.string
}

export default Loading
