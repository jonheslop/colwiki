import React, { Component } from 'react';
import 'isomorphic-fetch'
import DescriptionTerm from './DescriptionTerm'
import { createStore } from 'redux'
import Map from '../components/Map'
import Loading from './Loading'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segment: '',
      loading: true
    };
  }
  async componentWillMount() {
    const res = await fetch('https://www.strava.com/api/v3/segments/' + this.props.segment + '?access_token=5b5d96d72e2a68787801cd193668a83de0bc41ff')
    const strava = await res.json()

    this.setState({
      segment : strava,
      loading: false
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <div className="pa3 pt0-ns dtc-ns br b--black-20 w5-ns">
            Loading...
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="pa3 pt0-ns dtc-ns br b--black-20 w5-ns">
          <DescriptionTerm term="Name" value={ this.state.segment.name || '...' } unit="" />
          <DescriptionTerm term="Length" value={ (this.state.segment.distance / 1000).toFixed(1) || '...' } unit="km" />
          <DescriptionTerm term="Elevation" value={ this.state.segment.total_elevation_gain || '...' } unit="m" />
          <DescriptionTerm term="Avg. Gradient" value={ this.state.segment.average_grade || '...' } unit="%" />
          <DescriptionTerm term="Max. Gradient" value={ this.state.segment.maximum_grade || '...' } unit="%" />
          <DescriptionTerm term="Category" value={ this.state.segment.climb_category == 5 ? 'HC' : this.state.segment.climb_category } unit="" />
          <a className="f6 link orange i" href={`https://www.strava.com/segments/${this.state.segment.id}`}>Link to Strava »</a>
        </div>
        <Map start={ this.state.segment.start_latlng } end={ this.state.segment.end_latlng } line={ this.state.segment.map } />
      </div>
    )
  }
}
