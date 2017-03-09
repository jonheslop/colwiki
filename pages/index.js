import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'
import Header from '../components/header'
import Map from '../components/map'
import Segments from '../components/segments'

export default class extends React.Component {
    static async getInitialProps() {
        const initBounds = [[6.387154, 45.227307], [7.408560, 45.651627]]
        const res = await fetch('https://www.strava.com/api/v3/segments/explore?access_token=5b5d96d72e2a68787801cd193668a83de0bc41ff&bounds=45.227307,6.387154,45.651627,7.408560')
        const allSegments = await res.json()

        const climbSegments = await allSegments.segments.filter(function(segment){
            return segment.climb_category > 0
        })

        return {
            segments : climbSegments,
            fitBounds: initBounds
        }
    }
    render() {
        return (
            <div>
                <Head>
                  <title>⛰ Colwiki - </title>
                </Head>
                <Header/>
                <main role="main" className="ml7 dark-gray ph4">
                    <Map bounds={ this.props.fitBounds } segments={ this.props.segments } />
                    <Segments segments={ this.props.segments }/>
                </main>
            </div>
        )
    }
}
