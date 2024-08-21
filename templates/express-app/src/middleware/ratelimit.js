// src/middleware/rateLimitMiddleware.js

const rateLimit = require('express-rate-limit');

// Create a rate limiter middleware
const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true, // Send rate limit info in the response headers
    skipSuccessfulRequests: true // Only count requests that did not return a status code < 400
});

module.exports = rateLimitMiddleware;
