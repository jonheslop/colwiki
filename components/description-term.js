import React from 'react'

const DescriptionTerm = ({term, value, unit, context}) => {
  if (context === 'single') {
    return (
      <dl className="db dib-l w-auto-l lh-title mr6-l">
        <dt className="f6 fw4 ml0 gray">{ term }:</dt>
        <dd className="f2 f1-l fw3 ml0">{ value === 5 ? 'HC' : value || '...' }{ unit }</dd>
      </dl>
    )
  } else {
    return (
      <dl className="f6 lh-copy ma0 mb2">
        <dt className="dib fw5 gray mr1">{ term }:</dt>
        <dd className="dib ml0">{ value === 5 ? 'HC' : value || '...' }{ unit }</dd>
      </dl>
    )
  }
}

DescriptionTerm.propTypes = {
  term: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  unit: React.PropTypes.string,
  context: React.PropTypes.string
}

export default DescriptionTerm
