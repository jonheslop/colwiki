import React from 'react'
import Link from 'next/link'

export default ({pathname}) => (
  <nav className="lh-copy mt5">
    <ul className="list pa0">
      <li className="pv1"><Link href="/"><a className={`link hover-gold fw4 f5 ${pathname === '/' ? 'gold' : 'near-white'}`}>Home</a></Link></li>
      <li className="pv1"><Link href="/about"><a className={`link hover-gold fw4 f5 ${pathname === '/about' ? 'gold' : 'near-white'}`}>About</a></Link></li>
    </ul>
  </nav>
)
