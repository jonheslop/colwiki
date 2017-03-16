import React, {Component} from 'react'
import Loading from './Loading'

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
      var Layer = ReactMapboxGl.Layer
      var Feature = ReactMapboxGl.Feature
      var Marker = ReactMapboxGl.Marker
      const polyline = require('@mapbox/polyline')

      const routeLine = polyline.decode(this.state.segment.map.polyline)

      const map = (
        <div className="bt b--black-20">
          <ReactMapboxGl
            style="mapbox://styles/mapbox/outdoors-v9"
            accessToken="pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg"
            center={ [this.state.segment.end_longitude, this.state.segment.end_latitude] }
            containerStyle={{
              height: '40vh',
              width: '100%'
            }}>
            {/* <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "mountain-15" }}
              paint={{ "icon-color": '#ff4138' }}>
                <Feature
                    key={ this.state.segment.id }
                    coordinates={ [this.state.segment.end_latitude, this.state.segment.end_longitude] } />

            </Layer> */}
            {/* <Marker
              coordinates={ [this.state.segment.end_latitude, this.state.segment.end_longitude] }>
              <h1>Start</h1>
            </Marker> */}
            {/* <Marker
              coordinates={ this.state.end }>
              <h1>End</h1>
            </Marker> */}
            <Layer
              type="line"
              id="line"
              layout={{'line-cap': 'round', 'line-join': 'round'}}
              paint={{'line-color': '#4790E5', 'line-width': 12}}>
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
