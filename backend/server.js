const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// --- Middleware ---
// IMPORTANT: In production, you should configure CORS more securely
// For now, this allows all origins
app.use(cors()); 
app.use(express.json());

// --- In-Memory Database (for testing) ---
const users = [];
const JWT_SECRET = 'your-super-secret-key-that-should-be-in-an-env-file'; // Change this!

// --- Routes ---

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from your backend!" });
});

// Register User 🔐
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { id: users.length + 1, firstName, lastName, email, password: hashedPassword };
    users.push(newUser);

    console.log('Users:', users); // Log users to see if it's working
    res.status(201).json({ message: 'User created successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login User 🔑
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Create and send token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});