import Link from 'next/link'

export default ({ pathname, query }) => (
  <div className="fl w-50 w-100-ns mb3-ns cf">
    <Link href="/" prefetch>
      <a>
        <svg viewBox="0 0 60 50">
          <polygon points="50,50 0,50 25,0" style={{fill: '#aaa'}}></polygon>
          <polygon points="60,50 20,50 40,10" style={{fill: '#f4f4f4'}}></polygon>
        </svg>
      </a>
    </Link>
  </div>
)
