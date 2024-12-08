const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js'); 
require('dotenv').config({ path: '../../.env' });

// Check whether token is present
const authMiddleware = {
  verifyToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(403).json({ message: 'No token provided' });
      }


      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  },

// Rolechecking Middleware 
  checkRole: (roles) => {
    return async (req, res, next) => {
      try {
        const user = await User.findById(req.user.id);
        
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        if (!roles.includes(user.role)) {
          return res.status(403).json({ message: 'Access denied' });
        }

        next();
      } catch (error) {
        return res.status(500).json({ message: 'Server error' });
      }
    };
  }
};

module.exports = authMiddleware;