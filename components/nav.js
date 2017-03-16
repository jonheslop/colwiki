import React from 'react'
import Link from 'next/link'

const Nav = ({pathname}) => (
  <nav className="cf fl w-100 lh-copy mt3-ns">
    <ul className="list pa0">
      <li className="pv1"><Link href="/"><a className={`link hover-gold fw4 f5 ${pathname === '/' ? 'gold' : 'near-white'}`}>Home</a></Link></li>
      <li className="pv1"><Link href="/about" prefetch><a className={`link hover-gold fw4 f5 ${pathname === '/about' ? 'gold' : 'near-white'}`}>About</a></Link></li>
    </ul>
  </nav>
)

Nav.propTypes = {
  pathname: React.PropTypes.string
}

export default Nav
