import Link from 'next/link'
import Nav from './Nav'
import Logo from './Logo'

export default ({ pathname, query }) => (
    <header role="banner" className="fixed-ns vh-100-ns w-100 w5-ns bg-dark-gray near-white top-0 left-0 flex content-center justify-center flex-column border-box pa4">
        <header className="items-start flex-auto">
            <Logo />
            <h1 className="f4 lh-title fw6"><Link href="/"><a className="link near-white hover-gold">Untitled Col<br/>Database Project</a></Link></h1>
            <Nav pathname={ pathname } />
        </header>
        <footer>
            <p><small className="f6 i">By Jon &amp; Dov</small></p>
            <p><small className="f6 i">Powered by <a href="http://zeit.co/blog/next" className="link near-white underline">Next.js</a>, <a href="http://www.graph.cool" className="link near-white underline">Graph.cool</a> &amp; the <a href="http://www.strava.com" className="link near-white underline">Strava <span className="small-caps">api</span></a></small></p>
            <p><small className="f6 i"><a className="link near-white underline" href="https://github.com/jonheslop/colwiki">View source on Github</a></small></p>
        </footer>
    </header>
)
