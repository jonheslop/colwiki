import React, {Component} from 'react'
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
      var ReactMapboxGl = require('react-mapbox-gl').default
      var ReactMapboxGlFunc = require('react-mapbox-gl')
      var Layer = ReactMapboxGlFunc.Layer
      var Feature = ReactMapboxGlFunc.Feature
      var Marker = ReactMapboxGlFunc.Marker
      const polyline = require('@mapbox/polyline')

      const routeLine = polyline.decode(this.state.segment.map.polyline)

      routeLine.map(function (coordinates) {
        return coordinates.reverse()
      })
      
      const map = (
        <div className="bt b--black-20">
          <ReactMapboxGl
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
              <h1 className="green">&bull;</h1>
            </Marker>
            <Marker coordinates={[this.state.segment.end_longitude, this.state.segment.end_latitude]}>
              <h1 className="red">&bull;</h1>
            </Marker>
            <Layer
              type="line"
              id="line"
              layout={{'line-cap': 'round', 'line-join': 'round'}}
              paint={{
                'line-color': '#ff4136',
                'line-opacity': .5,
                'line-width': 4
              }}
              >
              <Feature coordinates={routeLine}/>
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
      return <Loading/>
    }
    return this.state.map
  }
}
