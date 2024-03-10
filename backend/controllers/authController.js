// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({ email: user.email, role: user.role }, 'your-secret-key');
    res.json({ accessToken });
  } else {
    res.status(401).send('Invalid credentials');
  }
};
