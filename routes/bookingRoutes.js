const express = require('express');
const Booking = require("../models/bookingSystem.js");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Retrieve all bookings from the database, selecting relevant fields
        const bookings = await Booking.find();
        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found' });
        }
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
      const { VehicleName, PickupDate, ReturnDate, Status } = req.body;
  
      // Create the new booking object with the required fields
      const newBooking = new Booking({
        VehicleName: VehicleName,
        PickupDate :PickupDate,
        ReturnDate: ReturnDate,
        Status: Status,
      });
  
      await newBooking.save();
      res.status(201).json(newBooking);
    } catch (error) {
      // Handle any errors and send a 400 status code with an error message
      console.error(error);
      res.status(400).json({ error: 'Error creating booking' });
    }
  });
  
  


module.exports = router;