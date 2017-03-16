import App from '../components/App'
import Header from '../components/Header'

export default props => (
  <App>
    <Header pathname={props.url.pathname} />
    <main role="main" className="ml7-ns dark-gray ph4">
      <header className="mt4">
        <h1 className="f1 lh-title mb0">The idea behind the<br/>Untitled Col Database&nbsp;Project</h1>
      </header>
      <article className="lh-copy">
        <p>Wouldn&rsquo;t it be nice if there was a place to find all the best climbs.</p>
        <p>A place that was easy to use and not cluttered.</p>
        <p>Well this is trying to be that</p>
        <h4 className="ttu tracket">Todo</h4>
        <ul class="list">
          <li><s>Allow anyone to add a new climb</s></li>
          <li><s>Vote up good climbs</s></li>
          <li>Use map to find best Strava segment respresation of climb and save it</li>
          <li>Add photos of the climb</li>
          <li>View all climbs on a map</li>
          <li>String climbs together and create <span className="small-caps">gpx</span> file</li>
          <li><s>Static maps with route overlayed <a href="https://www.mapbox.com/blog/static-styles-with-overlays/?utm_source=abnewsletter-march&utm_medium=email&utm_content=overlays-blog-abtest&utm_campaign=overlays-blog-abtest">example</a></s></li>
          <li>Swag 3D maps <a href="https://www.mapbox.com/blog/3d-terrain-threejs/?utm_source=abnewsletter-march&utm_medium=email&utm_content=terrain-blog-abtest&utm_campaign=terrain-blog-abtest">example</a></li>
        </ul>
      </article>
    </main>
  </App>
)
