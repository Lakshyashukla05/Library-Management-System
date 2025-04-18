

const express = require('express');
const { register, login } = require('../controllers/authController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/register', register);


router.post('/login', login);


router.get('/profile', verifyToken, (req, res) => {
  
  res.status(200).json({ message: 'Welcome to your profile', user: req.user });
});


router.get('/admin-dashboard', verifyToken, isAdmin, (req, res) => {
  
  res.status(200).json({ message: 'Welcome to the Admin Dashboard' });
});

module.exports = router;
