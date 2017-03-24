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
      var ReactMapboxGl = require('react-mapbox-gl')
      var ReactMapboxGlComponent = ReactMapboxGl.default
      var Layer = ReactMapboxGl.Layer
      var Feature = ReactMapboxGl.Feature
      var Marker = ReactMapboxGl.Marker
      const polyline = require('@mapbox/polyline')

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
              <svg className="w2 h2" style={{transform: 'translate(0, -50%)'}} viewBox="0 0 100 100" enable-background="new 0 0 100 100"><g><path fill="#19A974" d="M75,36.848C75,22.785,64.188,11,50.02,11S25,22.793,25,36.859   C25,41.5,25.648,45,27.846,49h-0.041l21.391,41.242c0.805,1.102,1.648-0.064,1.648-0.064C50.119,91.26,72.232,49,72.232,49h-0.018   C74.391,45,75,41.492,75,36.848z M38.502,36.057c0-6.635,5.158-12.008,11.518-12.008c6.357,0,11.52,5.373,11.52,12.008   s-5.162,12.01-11.52,12.01C43.66,48.066,38.502,42.691,38.502,36.057z"/></g></svg>
            </Marker>
            <Marker coordinates={[this.state.segment.end_longitude, this.state.segment.end_latitude]}>
              <svg className="w2 h2" style={{transform: 'translate(0, -50%)'}} viewBox="0 0 100 100" enable-background="new 0 0 100 100"><g><path fill="#ff4136" d="M75,36.848C75,22.785,64.188,11,50.02,11S25,22.793,25,36.859   C25,41.5,25.648,45,27.846,49h-0.041l21.391,41.242c0.805,1.102,1.648-0.064,1.648-0.064C50.119,91.26,72.232,49,72.232,49h-0.018   C74.391,45,75,41.492,75,36.848z M38.502,36.057c0-6.635,5.158-12.008,11.518-12.008c6.357,0,11.52,5.373,11.52,12.008   s-5.162,12.01-11.52,12.01C43.66,48.066,38.502,42.691,38.502,36.057z"/></g></svg>
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
