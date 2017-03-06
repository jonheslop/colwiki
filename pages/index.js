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
                <main role="main" className="ml7 ph3">

                </main>
            </div>
        )
    }
}
