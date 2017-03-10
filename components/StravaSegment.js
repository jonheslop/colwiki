import React from 'react'

function segmentDetails({ segment }) {
    if (segment) {
        return (
            <div className="pt4">
              <h4 className="f5 fw6">Col stats</h4>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Name: </dt>
                <dd className="dib ml0 gray">{ segment.name }</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Length: </dt>
                <dd className="dib ml0 gray">{ (segment.distance / 1000).toFixed(1) }km</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Elevation: </dt>
                <dd className="dib ml0 gray">{ segment.total_elevation_gain }m</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Avg. Gradient: </dt>
                <dd className="dib ml0 gray">{ segment.average_grade }%</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b mr1">Category: </dt>
                <dd className="dib ml0 gray">{ segment.climb_category = 5 ? 'HC' : segment.climb_category }</dd>
              </dl>
            </div>
        )
    }
}

export default (segmentDetails)
