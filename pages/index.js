/**
 * @file index.js
 */
// Import dependencies
import Head from "next/head";
import { EmptyState, Layout, Page } from '@shopify/polaris';
import Client from 'shopify-buy';
import ShopifyBuy from 'shopify-buy';

// Import library variables
import { getAllPostsForHome, getProducts } from "../lib/api";
import { BLOG_NAME } from "../lib/constants";

// Import components
import Container from "../components/container";
import RecentArticles from "../components/recent-articles";
import Header from "../components/header";
import Hero from "../components/hero";
import ThreeColumnSplit from "../components/three-column-split";
import ImageTextSplit from "../components/image-text-split";
import SimpleCTA from "../components/simple-cta";
import PageLayout from "../components/layout";
import PopoutBlade from "../components/popout-blade";

export default function Index({ allPosts: { edges }, preview }) {
  const recentPosts = edges.slice(0, 3);  

  const shopifyProduct = () => {
    return {
      __html: `
        <div id='product-component-1608334938096'></div>
        <script type="text/javascript">
        /*<![CDATA[*/
        (function () {
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: ${process.env.SHOPIFY_STORE_DOMAIN},
              storefrontAccessToken: ${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN},
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '6131257802938',
                node: document.getElementById('product-component-1608334938096'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                "background-color": "#77435d",
                ":focus": {
                  "background-color": "#6b3c54"
                }
              }
            },
            "buttonDestination": "checkout",
            "text": {
              "button": "Buy now"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "Roboto, sans-serif",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                "background-color": "#77435d",
                ":focus": {
                  "background-color": "#6b3c54"
                }
              }
            },
            "googleFonts": [
              "Roboto"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Roboto, sans-serif",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                "background-color": "#77435d",
                ":focus": {
                  "background-color": "#6b3c54"
                }
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "Roboto"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Roboto, sans-serif",
                "background-color": "#77435d",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                ":focus": {
                  "background-color": "#6b3c54"
                }
              }
            },
            "googleFonts": [
              "Roboto"
            ]
          }
        },
              });
            });
          }
        })();
        /*]]>*/
        </script>
      `
    }
  }

  return (
    <>
      <PageLayout preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Hero />
          <ThreeColumnSplit />
          <ImageTextSplit />
          <PopoutBlade 
            heading={`Learn Online with Me`}
            body={`Join other students from all over the world to 
            take part in practicing with me online.
            <br />
            Because it’s more fun when we are doing it together.`}
            button1={{
              href: '/',
              text: 'View Class Schedule',
              color: 'purple'
            }}
            button2={{
              href: '/',
              text: 'Work 1:1 with Rachel',
              color: 'orange'
            }}
          />

          {/* Show Recent Articles (3 at a time) */}
          {recentPosts.length > 0 && <RecentArticles posts={recentPosts} />}

          {/* Testing Shopify */}
          <div dangerouslySetInnerHTML={shopifyProduct()} />

          <SimpleCTA />
        </Container>
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
