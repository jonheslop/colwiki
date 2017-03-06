import React from 'react'
import Nav from './nav'

export default () => (
    <header role="banner" className="fixed vh-100 bg-dark-gray washed-blue top-0 left-0 w5 flex content-center justify-center flex-column border-box pa4">
        <header className="items-start flex-auto">
            <h1 className="f1">Colwiki</h1>
            <Nav />
        </header>
        <footer>
            <p className="i">By Jon &amp; Dov</p>
        </footer>
    </header>
)
