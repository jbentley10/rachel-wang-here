/**
 * @file index.js
 */
// Import dependencies
import Head from "next/head";

// Import library variables
import { getAllPostsForHome } from "../lib/api";
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
        <div id='product-component-1608339082928'></div>
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
              domain: 'john-bentley-partner-test.myshopify.com',
              storefrontAccessToken: 'fc674d3f4e2a6a13a4a0e654dce6ab00',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              ui.createComponent('product', {
                id: '5964302680225',
                node: document.getElementById('product-component-1608339082928'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                },
                "text-align": "left"
              },
              "button": {
                "font-family": "Arial, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                "background-color": "#77435d",
                ":focus": {
                  "background-color": "#6b3c54"
                }
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "buttonDestination": "checkout",
            "text": {
              "button": "Buy now"
            }
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
                "font-family": "Arial, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                "background-color": "#77435d",
                ":focus": {
                  "background-color": "#6b3c54"
                }
              },
              "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "Arial, sans-serif",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
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
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Arial, sans-serif",
                "background-color": "#77435d",
                ":hover": {
                  "background-color": "#6b3c54"
                },
                ":focus": {
                  "background-color": "#6b3c54"
                }
              },
              "count": {
                "font-size": "18px"
              }
            }
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
