import React, {Component} from 'react'
import MarkerIcon from '../svg/marker.svg'
import Loading from './loading'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      map: '',
      segment: props.segment
    }
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const ReactMapboxGl = require('react-mapbox-gl')
      const polyline = require('@mapbox/polyline')

      const ReactMapboxGlComponent = ReactMapboxGl.default
      const Layer = ReactMapboxGl.Layer
      const Feature = ReactMapboxGl.Feature
      const Marker = ReactMapboxGl.Marker
      const routeLine = polyline.decode(this.state.segment.map.polyline)

      routeLine.map(function (coordinates) {
        return coordinates.reverse()
      })

      const map = (
        <div className="bb b--black-20">
          <ReactMapboxGlComponent
            style="mapbox://styles/mapbox/outdoors-v9"
            accessToken="pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg"
            // fitBounds={[[-79, 43], [-73, 45]]}
            center={[this.state.segment.start_longitude, this.state.segment.start_latitude]}
            containerStyle={{
              height: '50vh',
              width: '100%'
            }}
            >
            <Marker coordinates={[this.state.segment.start_longitude, this.state.segment.start_latitude]}>
              <span style={{fill: '#19a974'}}>
                <MarkerIcon/>
              </span>
            </Marker>
            <Marker coordinates={[this.state.segment.end_longitude, this.state.segment.end_latitude]}>
              <span style={{fill: '#ff4136'}}>
                <MarkerIcon/>
              </span>
            </Marker>
            <Layer
              type="line"
              id="line"
              layout={{'line-cap': 'round', 'line-join': 'round'}}
              paint={{
                'line-color': '#ff4136',
                'line-opacity': 0.5,
                'line-width': 4
              }}
              >
              <Feature coordinates={routeLine}/>
            </Layer>
          </ReactMapboxGlComponent>
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
      return <Loading/>
    }
    return this.state.map
  }
}
