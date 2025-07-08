const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import configurations and routes
const passport = require('./config/passport');
const authRoutes = require('./routes/auth');
const collageRoutes = require('./routes/collages');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));

app.use(express.json({ limit: '10mb' })); // Increased limit for image data
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../')));

// Routes
app.use('/auth', authRoutes);
app.use('/api/collages', collageRoutes);
app.use('/api/admin', adminRoutes);

// Root route - redirect based on authentication
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.role === 'admin') {
            res.redirect('/admin.html');
        } else {
            res.redirect('/dashboard.html');
        }
    } else {
        res.sendFile(path.join(__dirname, '../login.html'));
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;