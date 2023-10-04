const express = require('express');
const router = express.Router();
const {cerateReview, getAllReviews, getSingleReview, updateReview, deleteReview} = require('../controllers/reviewController');

router.route('/').get(getAllReviews).post(cerateReview);
router.route('/:id').get(getSingleReview).patch(updateReview).delete(deleteReview);

module.exports = router