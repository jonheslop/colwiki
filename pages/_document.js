import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <title>⛰ Untitled Col Database Project</title>
          <meta property="og:title" content="⛰ Untitled Col Database Project" />
          <meta property="og:description" content="All the climbs, graded and rated in a clean and useable fashion" />
          <link rel="prefetch" href="./static/tofino-bold-webfont.woff2"/>
          <link rel="prefetch" href="./static/tofino-bolditalic-webfont.woff2"/>
          <link rel="prefetch" href="./static/tofino-regular-webfont.woff2"/>
          <link rel="prefetch" href="./static/tofino-regularitalic-webfont.woff2"/>
          <link rel="stylesheet" href="./static/fonts.css"/>
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
          <style
            dangerouslySetInnerHTML={{__html: `
            .cw-blue {
                color: #6a9fb5;
            }
            .b--cw-blue {
                border-color: #6a9fb5;
            }
            .bg-cw-blue {
                background-color: #6a9fb5;
            }
            .bg--tilt {
                transform: skewY(-12deg);
                transform-origin: 0;
            }
            .f7 {
                font-size: .625rem;
            }
          `}}
            />
        </Head>
        <body className="tofino">
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}
