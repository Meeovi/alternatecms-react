
import Header from '../common/components/Header.js'
import Footer from '../common/components/Footer.js'
import Script from 'next/script'
import '../public/styles/styles.css'
import '../styles/globals.css'
//import 'mdb-ui-kit';
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
      <Script src="../mdb/js/mdb.min.js" />
      <main className="mb-5" style={{marginTop: "-55px"}}>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App