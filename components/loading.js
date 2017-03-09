import React from 'react'

export default ({ title }) => (
  <div className="bg-near-white mt4">
    <h3>{ title || 'Loading...' }</h3>
    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>
  </div>
)
