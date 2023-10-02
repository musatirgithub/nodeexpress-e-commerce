const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, uploadImage} = require('../controllers/productController');


router.route('/').get(getAllProducts);
router.route('/:id').get(getSingleProduct);

module.exports = router;