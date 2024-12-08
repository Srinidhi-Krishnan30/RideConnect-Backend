const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require("./mongoDB/connect.js");



const vehicleRoutes = require('./routes/vehicleRoutes');
const userRoutes = require('./routes/userManagement');
const reportRoutes = require("./routes/reportRoutes");
const authRoutes = require("./routes/authRoutes.js");

const userVechicleRoutes = require("./routes/userVehicleRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");
const ticketRoutes = require("./routes/ticketRoutes.js");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());

// 1. Authentication Route
app.use('/auth', authRoutes);

// 2. Admin Routes
app.use('/admin/api/vehicles',vehicleRoutes);
app.use('/admin/api/users',userRoutes);
app.use('/admin/api/reports',reportRoutes);
app.use('/admin/api/bookings',bookingRoutes);
app.use('/admin/api/tickets',ticketRoutes);

// 3. User Routes

app.use('/user/api',userVechicleRoutes);
app.use('/user/api/bookings',userVechicleRoutes);


 



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});







