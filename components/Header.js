import Link from 'next/link'
import Nav from './Nav'

export default ({ pathname, query }) => (
    <header role="banner" className="fixed-ns vh-100-ns w-100 w5-ns bg-dark-gray near-white top-0 left-0 flex content-center justify-center flex-column border-box pa4">
        <header className="items-start flex-auto">
            <h1 className="f3 lh-title fw6"><Link href="/"><a className="link near-white hover-gold">Untitled Col Database Project</a></Link></h1>
            <Nav />
        </header>
        <footer>
            <small className="f6 i">By Jon &amp; Dov</small>
        </footer>
    </header>
)
