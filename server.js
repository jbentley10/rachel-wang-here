// server.js
const next = require('next');
const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const wooConfig = require('./wooConfig');

const wooCommerceAPI = new WooCommerceRestApi({
  url: wooConfig.siteURL,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  version: "wc/v3"
});

const PORT = 3002;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => {
      return handle(req, res);
    });
 
    server.get('/getProducts', (req, res) => {
      wooCommerceAPI.get("products")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })

    server.listen(PORT, err => {
      if (err) {
        throw err;
      }

      console.log("Ready on port " + PORT);
    })
  })

  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });