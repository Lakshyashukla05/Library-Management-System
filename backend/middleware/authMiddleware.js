

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; 


const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
    
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Invalid or expired token.' });
  }
};


const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next(); 
};

module.exports = { verifyToken, isAdmin };
