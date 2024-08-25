const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Import Helmet
const connectDB = require('./database'); 
const app = express();
const cors=require('cors')
const port = process.env.PORT || 5000;
const rateLimitMiddleware = require('./middleware/ratelimit');
// Connect to the database
connectDB();

// Use Helmet to set security headers
app.use(helmet());
app.use(cors())
// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimitMiddleware)
// Routes
const exampleRoutes = require('./routes/route'); // Assuming this is your route file
app.use('/api', exampleRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
