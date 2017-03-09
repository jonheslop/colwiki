import Link from 'next/link'
import Nav from './Nav'

export default ({ pathname }) => (
    <header role="banner" className="fixed vh-100 bg-dark-gray near-white top-0 left-0 w5 flex content-center justify-center flex-column border-box pa4">
        <header className="items-start flex-auto">
            <h1 className="f3 lh-title fw6">Untitled Col Database Project</h1>
            <Nav />
        </header>
        <footer>
            <p className="i">By Jon &amp; Dov</p>
        </footer>
    </header>
)
