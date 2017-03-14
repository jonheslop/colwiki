import React, { Component } from 'react';
import DescriptionTerm from './DescriptionTerm'

export default ({ segment }) => (
    <div className="pa3 pt0-ns dtc-ns br b--black-20 w5-ns">
      <DescriptionTerm term="Name" value={ segment.name || '...' } unit="" />
      <DescriptionTerm term="Length" value={ (segment.distance / 1000).toFixed(1) || '...' } unit="km" />
      <DescriptionTerm term="Elevation" value={ segment.total_elevation_gain || '...' } unit="m" />
      <DescriptionTerm term="Avg. Gradient" value={ segment.average_grade || '...' } unit="%" />
      <DescriptionTerm term="Max. Gradient" value={ segment.maximum_grade || '...' } unit="%" />
      <DescriptionTerm term="Category" value={ segment.climb_category == 5 ? 'HC' : segment.climb_category } unit="" />
      <a className="f6 link orange i" href={`https://www.strava.com/segments/${segment.id}`}>Link to Strava »</a>
    </div>
)
