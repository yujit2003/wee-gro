const express = require('express');
const router = express.Router();


const { getAllProducts, createProduct, getProductDetails} = require('../controller/productcontroller');
const {getQuotes} = require('../index.js');

console.log("router")
    
router.route("/products").get(getAllProducts);


router.route("/admin/products/new").post(createProduct);

router.route("/product/:id").get(getProductDetails);
router.route("/webscrapping").get(getQuotes);



console.log("productrouter")

module.exports = router;