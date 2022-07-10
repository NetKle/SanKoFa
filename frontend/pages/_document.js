import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render = () => (
    <>
      <Html dir="rtl">
        <Head />

        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;800;900&family=IBM+Plex+Mono:wght@300;500&display=swap"
            rel="stylesheet"
          />
        </head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}

export default MyDocument;
