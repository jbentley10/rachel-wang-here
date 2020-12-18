import '../styles/index.css'
import { AppProvider } from "@shopify/polaris"
import translations from '@shopify/polaris/locales/en.json';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider i18n={translations}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
