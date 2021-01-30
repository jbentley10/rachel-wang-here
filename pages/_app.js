/**
 * @file _app.js
 */
// Import dependencies
import '../styles/index.css'
import { AppProvider } from "@shopify/polaris"
import translations from '@shopify/polaris/locales/en.json';
import App from 'next/app';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
// For the password-protected pages
import Cookies from "universal-cookie"
import consts from "../utils/consts"

/**
 * APOLLO CLIENT
 */
/**
 * Queries
 */
const GET_POSTS = gql`
  query Posts {
    posts {
      edges {
        node {
          title
          excerpt(format: RENDERED)
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
/** 
 * Cache
 */
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         post(_, { args, toReference }) {
//           return toReference({
//             __typename: 'Post',
//             id: args.id,
//           });
//         }
//       }
//     }
//   }
// });

const client = new ApolloClient({
  uri: 'http://rachel-wang-here.local/graphql',
  cache: new InMemoryCache()
})

client
  .query({
    query: GET_POSTS
  })
  .then(result => console.log(result.data.posts.edges));

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
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

  if (password === "letmein") {
    appProps.pageProps.hasReadPermission = true
  }

  if (Math.random() > 0.5) {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default MyApp
