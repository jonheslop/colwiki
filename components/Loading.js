import React from 'react'

export default ({title}) => (
  <div className="bg-near-white dark-gray flex items-center vh-50 justify-center">
    <h3>{ title || 'Loading...' }</h3>
  </div>
)
