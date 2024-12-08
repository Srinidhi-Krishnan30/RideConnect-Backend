const express = require('express');
const Vehicle = require('../models/vehicleModel'); // Adjust the path based on your project structure
const router = express.Router();


// 1.  Route to fetch all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find(); // Fetch all vehicles
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vehicles', error });
  }
});

// 2. Get a specific vehicle
router.get('/api/vehicles/:id', async (req, res) => {
    try {
      const vehicle = await Vehicle.findById(req.params.id);
      if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching vehicle', error });
    }
});

// 3. Add a new vehicle
router.post('/', async (req, res) => {
    const { VehicleId, Model, Make, Year, PricePerDay, AvailabilityStatus, Specifications, ImageUrl } = req.body;
  
    try {
      const newVehicle = new Vehicle({
        VehicleId,
        Model,
        Make,
        Year,
        PricePerDay,
        AvailabilityStatus,
        Specifications,
        ImageUrl,
      });
  
      await newVehicle.save();
      res.status(201).json(newVehicle);
    } catch (error) {
      res.status(500).json({ message: 'Error creating vehicle', error });
    }
});
   
// 4. Remove a vehicle
router.delete('/:id', async (req, res) => {
    try {
      const deletedVehicle = await Vehicle.findOneAndDelete({ VehicleId: req.params.id });
      if (!deletedVehicle) return res.status(404).json({ message: 'Vehicle not found' });
      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting vehicle', error });
    }
});

// 5. Search Functionality
router.get('/api/vehicles/search', async (req, res) => {
    const { query } = req.query; // e.g., ?query=Toyota
  
    try {
      const vehicles = await Vehicle.find({
        $or: [
          { Model: { $regex: query, $options: 'i' } },
          { Make: { $regex: query, $options: 'i' } },
        ],
      });
  
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ message: 'Error searching vehicles', error });
    }
});

// 6. Searching based on status
  
router.get('/api/vehicles/status/:status', async (req, res) => {
    const { status } = req.params;
  
    try {
      const vehicles = await Vehicle.find({ AvailabilityStatus: status });
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching vehicles by status', error });
    }
});
  

// Export the router
module.exports = router;
