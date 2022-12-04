
import Header from '../common/components/Header.js'
import Footer from '../common/components/Footer.js'
import 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css';

//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    ssrMode: true,
    cache: new InMemoryCache()
  })

  return (
    <div>
    <head>
      <meta name="application-name" content="AlternateCMS" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AlternateCMS" />
      <meta name="description" content="A headless content management system with ecommerce features, graphql, React, and Prisma ORM." />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="../public/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="../public/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://alternatecms.com" />
      <meta name="twitter:title" content="AlternateCMS" />
      <meta name="twitter:description" content="A headless content management system with ecommerce features, graphql, React, and Prisma ORM." />
      <meta name="twitter:image" content="https://alternatecms.com/icons/android-chrome-192x192.png" />
      <meta name="twitter:creator" content="@AlternateCms" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AlternateCMS" />
      <meta property="og:description" content="A headless content management system with ecommerce features, graphql, React, and Prisma ORM." />
      <meta property="og:site_name" content="AlternateCMS" />
      <meta property="og:url" content="https://alternatecms.com" />
      <meta property="og:image" content="https://alternatecms.com/icons/apple-touch-icon.png" />

      <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
      <link rel='stylesheet' href='../styles/globals.css' />
      <link rel='stylesheet' href='../public/styles/styles.css' />
    </head>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </div>
  )
}

export default App