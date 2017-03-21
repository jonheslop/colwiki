import React from 'react'

const DescriptionTerm = ({term, value, unit}) => (
  <dl className="f6 lh-copy ma0 mb2">
    <dt className="dib fw5 gray mr1">{ term }:</dt>
    <dd className="dib ml0 ">{ value === 5 ? 'HC' : value || '...' }{ unit }</dd>
  </dl>
)

DescriptionTerm.propTypes = {
  term: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  unit: React.PropTypes.string
}

export default DescriptionTerm
