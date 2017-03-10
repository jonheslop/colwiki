import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            segment: {}
        };
    }
    async componentWillMount() {
        const res = await fetch('https://www.strava.com/api/v3/segments/' + this.props.segment + '?access_token=5b5d96d72e2a68787801cd193668a83de0bc41ff')
        const strava = await res.json()

        this.setState({
            segment : strava
        })
    }
    render() {
        return (
            <div className="pa3 pt0-ns dtc-ns br b--black-20 w5-ns">
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Name: </dt>
                <dd className="dib ml0 gray">{ this.state.segment.name || '...' }</dd>
              </dl>
             <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Length: </dt>
                <dd className="dib ml0 gray">{ (this.state.segment.distance / 1000).toFixed(1) || '...' }km</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Elevation: </dt>
                <dd className="dib ml0 gray">{ this.state.segment.total_elevation_gain || '...' }m</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Avg. Gradient: </dt>
                <dd className="dib ml0 gray">{ this.state.segment.average_grade || '...' }%</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Max. Gradient: </dt>
                <dd className="dib ml0 gray">{ this.state.segment.maximum_grade || '...' }%</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Category: </dt>
                <dd className="dib ml0 gray">{ this.state.segment.climb_category = 5 ? 'HC' : this.state.segment.climb_category }</dd>
              </dl>
              <a className="f6 link orange i" href={`https://www.strava.com/segments/${this.state.segment.id}`}>Link to Strava »</a>
            </div>
        )
    }
}
