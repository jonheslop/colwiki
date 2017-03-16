import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="fl w-50 w-100-ns mb3-ns cf">
    <Link href="/" prefetch>
      <a>
        <svg viewBox="0 0 60 50">
          <polygon points="50,50 0,50 25,0" style={{fill: '#777'}}/>
          <polygon points="60,50 20,50 40,10" style={{fill: '#aaa'}}/>
        </svg>
      </a>
    </Link>
  </div>
)
