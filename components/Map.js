import React, { Component } from 'react';
import Loading from './Loading'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      map: '',
      start: props.start,
      end: props.end,
      line: props.line
    }
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const ReactMapboxGl = require('react-mapbox-gl').default;
      const polyline = require('@mapbox/polyline');
      const Layer = ReactMapboxGl.Layer;
      const Feature = ReactMapboxGl.Feature;
      const Marker = ReactMapboxGl.Marker;

      console.log(polyline.decode(this.state.line.polyline))

      const routeLine = polyline.decode(this.state.line.polyline)

      const map = (
        <div>
          <ReactMapboxGl
            style="mapbox://styles/mapbox/outdoors-v9"
            accessToken="pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg"
            center={ this.state.end.reverse() }
            // fitbounds={ this.state.start, this.state.end }
            containerStyle={{
              height: "40vh",
              width: "100%"
            }}>
            <Marker
              coordinates={ this.state.start }>
              <h1>Start</h1>
            </Marker>
            <Marker
              coordinates={ this.state.end }>
              <h1>End</h1>
            </Marker>
            <Layer
              type="line"
              id="line"
              layout={{ "line-cap": "round", "line-join": "round" }}
              paint={{ "line-color": "#4790E5", "line-width": 12 }}>
              <Feature coordinates={ routeLine }/>
            </Layer>
          </ReactMapboxGl>
        </div>
      )
      this.setState({
        map: map,
        loading: false
      })
    }
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return this.state.map
  }
}
