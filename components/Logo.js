export default ({ pathname, query }) => (
  <div className="w-100 mb3 cf">
    <span className="logo"></span>
    <span className="logo logo--near-white fr"></span>
    <style jsx>{`
      .logo {
          align-self: center;
          border-color: transparent transparent #ffffff transparent;
          border-style: solid;
          border-width: 0 3em 5em 3em;
          height: 0;
          margin-right: 5em;
          width: 0;
      }
      .logo--near-white {
          border-color: transparent transparent #f4f4f4 transparent;
      }
  `}</style>
  </div>
)
