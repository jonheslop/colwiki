import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <title>⛰ Colwiki</title>
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
          <style dangerouslySetInnerHTML={{__html: `
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
              `}} />
        </Head>
        <body className="sans-serif">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
