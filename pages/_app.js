import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='icon' href='https://raw.githubusercontent.com/Adelsherif/Faster-Website/master/pages/quote.png' />
          <title>Faster</title>
        </Head>
        <Component {...pageProps} />
      </>
  )}

export default MyApp;