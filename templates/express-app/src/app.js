const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Import Helmet
const connectDB = require('./database'); 
const app = express();
const port = process.env.PORT || 3000;
const rateLimitMiddleware = require('./middleware/rateLimitMiddleware');
// Connect to the database
connectDB();

// Use Helmet to set security headers
app.use(helmet());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimitMiddleware)
// Routes
const exampleRoutes = require('./routes/exampleRoutes'); // Assuming this is your route file
app.use('/api', exampleRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
