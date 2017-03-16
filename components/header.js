import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import Logo from './logo'

const Header = ({pathname}) => (
  <header role="banner" className="fixed-ns vh-100-ns w-100 w5-ns bg-near-white dark-gray top-0 left-0 flex content-center justify-center flex-column border-box pa4">
    <header className="items-start flex-auto">
      <Logo/>
      <h1 className="fl w-50 w-100-ns f4 lh-title fw6 pl3 pl0-ns"><Link href="/" prefetch><a className="link dark-gray hover-red hover-red">Untitled Col<br/>Database Project</a></Link></h1>
      <Nav pathname={pathname}/>
    </header>
    <footer className="code lh-copy">
      <p className="f7 i">By Jon &amp; Dov</p>
      <p className="f7 i">Powered by <a href="http://zeit.co/blog/next" className="link dark-gray hover-red underline">Next.js</a>, <a href="http://www.graph.cool" className="link dark-gray hover-red underline">Graph.cool</a> &amp; the <a href="http://www.strava.com" className="link dark-gray hover-red underline">Strava API</a></p>
      <p className="f7 i"><a className="link dark-gray hover-red underline" href="https://github.com/jonheslop/colwiki">View source on Github</a></p>
    </footer>
  </header>
)

Header.propTypes = {
  pathname: React.PropTypes.string
}

export default Header
