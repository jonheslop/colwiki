import React from 'react';

export default({segment}) => (
  <div className="dtc-ns pa3 w-100 w-two-thirds">
    <img className="v-top" src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/static/pin-s+19A974(${segment.start_longitude},${segment.start_latitude}),pin-s+FF4136(${segment.end_longitude},${segment.end_latitude}),path-5+FF4136-0.5(${encodeURIComponent(segment.map.polyline)})/auto/500x250@2x?access_token=pk.eyJ1IjoiY2hyeXNhbGlzc29sbW90aXZlIiwiYSI6ImNqMDB5aG5ndDAwNHUzM3I0cmswbjVvOXYifQ.crgwy6034BHr2ZlLEa5rlg`} />
  </div>
)
