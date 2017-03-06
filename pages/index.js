import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'
import Header from '../components/header'

export default class extends React.Component {
    // static async getInitialProps() {
    //
    // }
    render() {
        return (
            <div>
                <Head>
                  <title>⛰ Colwiki</title>
                </Head>
                <Header/>
                <main role="main" className="ml7 dark-gray">
                    <header className="relative">
                        <div className="bg-washed-yellow bg--tilt w-100 h-100 absolute z-0 pv7"></div>
                        <h1 className="f1 f-headline-l bt bw5 b--washed-yellow z-1 relative ma0 pa5">Find the best climbs with Colwiki</h1>
                    </header>
                </main>
            </div>
        )
    }
}
