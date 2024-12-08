const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Review = require("../models/reviewModel.js");
const router = express.Router();

// 1. Add a new review
router.post('/', async (req, res) => {
    const { modelNumber, make, comments} = req.body;
  
    // Validation: Ensure that modelNumber, make, and comments are provided
    if (!modelNumber || !make || !comments) {
      return res.status(400).json({ message: 'Model Number, Make, and Comments are required' });
    }
  
    try {
      // Create a new review
      const newReview = new Review({
        ReviewId: uuidv4(),  // Generate a unique ID for the review
        modelNumber: modelNumber,
        make: make,
        Comments: comments,
      });
  
      // Save the review to the database
      await newReview.save();
      
      // Respond with a success message
      res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding review', error });
    }
  });
  router.get('/', async (req, res) => {
    try {
      const reviews = await Review.find();  
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching reports');
    }
  });

  // Export the router
module.exports = router;