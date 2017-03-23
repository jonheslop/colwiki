import React from 'react'
import DescriptionTerm from './description-term'

const Segment = ({segment, containerClasses, context}) => (
  <aside className={containerClasses}>
    <h3 className="f6 ttu tracked mt0">Segment Stats</h3>
    <DescriptionTerm context={context} term="Length" value={(segment.distance / 1000).toFixed(1) || '...'} unit="km"/>
    <DescriptionTerm context={context} term="Elevation" value={segment.total_elevation_gain.toLocaleString('en-US', {maximumFractionDigits: 0}) || '...'} unit="m"/>
    <DescriptionTerm context={context} term="Avg. Gradient" value={segment.average_grade || '...'} unit="%"/>
    <DescriptionTerm context={context} term="Max. Gradient" value={segment.maximum_grade || '...'} unit="%"/>
    <DescriptionTerm context={context} term="Category" value={segment.climb_category} unit=""/>
    <DescriptionTerm context={context} term="Athlete Count" value={segment.athlete_count.toLocaleString()} unit=""/>
    <DescriptionTerm context={context} term="Effort Count" value={segment.effort_count.toLocaleString()} unit=""/>
    <a className="lh-copy db f6 link red i" href={`https://www.strava.com/segments/${segment.id}`}>Link to Strava »</a>
  </aside>
)

Segment.propTypes = {
  segment: React.PropTypes.object,
  containerClasses: React.PropTypes.string,
  context: React.PropTypes.string
}

export default Segment
