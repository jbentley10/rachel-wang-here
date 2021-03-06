/**
 * @file _app.js
 */
// Import dependencies
import '../styles/index.css'
import { AppProvider } from "@shopify/polaris"
import translations from '@shopify/polaris/locales/en.json';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "../lib/apolloClient";
// For the password-protected pages
import Cookies from "universal-cookie"
import consts from "../utils/consts"

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider i18n={translations}>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ""

  if (password === process.env.PRIVATE_RESOURCES_PASSWORD) {
    appProps.pageProps.hasReadPermission = true
  }

  if (Math.random() > 0.5) {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default MyApp
