export default ({ term, value, unit }) => (
  <dl className="f6 lh-title mv2">
    <dt className="dib b mr1">{ term }:</dt>
    <dd className="dib ml0 gray">{ value || '...' }{ unit }</dd>
  </dl>
)
