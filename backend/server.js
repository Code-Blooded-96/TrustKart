// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// A simple test route to make sure your server is working
app.get('/api', (req, res) => {
  res.json({ message: "Hello from your backend!" });
});

// You will add your '/api/register' and '/api/login' routes here later

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});