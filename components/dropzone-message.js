import React from 'react'

export default ({bgColor, color, donger, message}) => (
  <div className={`ba b--dashed w-100 aspect-ratio aspect-ratio--1x1 b--${color} ${color} bg-${bgColor}`}>
    <div className="aspect-ratio--object">
      <div className="absolute left-0 right-0 tc lh-copy f6" style={{top: '50%', transform: 'translate(0, -50%)'}}>
        { donger &&
          <div className="mb3 f4">{ donger }</div>
        }
        { message }
      </div>
    </div>
  </div>
)
