import React from 'react'
import Loading from './loading'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import polyline from '@mapbox/polyline'

export default ({bounds, segments}) => (
    <div className="mt4">
        <ReactMapboxGl
          style="mapbox://styles/mapbox/outdoors-v9"
          className="mapbox-colwiki"
          fitBounds={ bounds }
          accessToken="pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg"
          containerStyle={{
            height: "50vh",
            width: "100%"
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "mountain-15" }}
              paint={{ "icon-color": '#ff4138' }}>
              { segments.map(segment => (
                  <Feature
                      key={ segment.id }
                      coordinates={ segment.start_latlng.reverse() }/>

              ))}
            </Layer>
            <Layer
              type="line"
              id="polylines"
              layout={{ "line-cap": "round", "line-join": "round" }}
              paint={{ "line-color": "#4790E5", "line-width": 12 }}>
              { segments.map(segment => (
                <Feature
                  key={ segment.id }
                  coordinates={ polyline.decode(segment.points) }/>
              ))}
            </Layer>
        </ReactMapboxGl>
    </div>
)
