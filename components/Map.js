import React, { Component } from 'react';
import Loading from './Loading'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      map: '',
    }
  }
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const ReactMapboxGl = require('react-mapbox-gl').default;
      const Layer = ReactMapboxGl.Layer;
      const Feature = ReactMapboxGl.Feature;
      const map = (
        <div className="mv4">
          <ReactMapboxGl
            style="mapbox://styles/mapbox/outdoors-v9"
            accessToken="pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg"
            containerStyle={{
              height: "50vh",
              width: "100%"
            }}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
              </Layer>
          </ReactMapboxGl>
        </div>
      )
      this.setState({
        map: map
      })
    }
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return this.state.map
  }
}
