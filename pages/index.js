import React from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'
import Header from '../components/header'

export default class extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://www.strava.com/api/v3/segments/explore?access_token=5b5d96d72e2a68787801cd193668a83de0bc41ff&bounds=37.821362,-122.505373,37.842038,-122.465977')
        const data = await res.json()

        return { segments : data.segments }
    }
    render() {
        return (
            <div>
                <Head>
                  <title>⛰ Colwiki</title>
                </Head>
                <Header/>
                <main role="main" className="ml7 dark-gray ph4">
                    <header className="relative">
                        {/* <div className="bg-near-white bg--tilt w-100 h-100 absolute z-0 pv7"></div> */}
                        <h1 className="f1 fw6 z-1 relative mt5">Find the best climbs with Colwiki</h1>
                    </header>
                    <table className="collapse ba br2 b--black-10 pv2 ph3 mt4">
                        <tbody>
                            <tr className="striped--near-white">
                                <th className="tl f6 fw6 ttu pv2 ph3">Name</th>
                                <th className="tc f6 ttu fw6 pv2 ph3">Av. Gradient</th>
                                <th className="tc f6 ttu fw6 pv2 ph3">Elevation</th>
                                <th className="tc f6 ttu fw6 pv2 ph3">Distance</th>
                                <th className="tr f6 ttu fw6 pv2 ph3">Climb Category</th>
                            </tr>
                            { this.props.segments.map(segment => (
                                <tr>
                                    <td className="pv2 ph3">{ segment.name }</td>
                                    <td className="pv2 ph3">{ segment.avg_grade }</td>
                                    <td className="pv2 ph3">{ segment.elev_difference }</td>
                                    <td className="pv2 ph3">{ segment.distance }</td>
                                    <td className="pv2 ph3">{ segment.climb_category }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        )
    }
}
