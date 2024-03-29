import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Marck+Script&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="body__gray">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}