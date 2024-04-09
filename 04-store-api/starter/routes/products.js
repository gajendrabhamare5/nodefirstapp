
const express = require('express')
const router = express.Router()

const {getAllProducts,getAllProductsStatic} = require('../controllers/products')



/* router.route('/').get(getAllProducts) */
router.get('/', getAllProducts);

/* router.route('/static').get(getAllProductsStatic) */
router.get('/static', getAllProductsStatic);

module.exports = router