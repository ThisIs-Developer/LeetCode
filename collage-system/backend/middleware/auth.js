// Authentication middleware
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Authentication required' });
};

// Admin authentication middleware
const ensureAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        return next();
    }
    res.status(403).json({ error: 'Admin access required' });
};

// User authentication middleware (for own resources)
const ensureUserOrAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.role === 'admin') {
            return next();
        }
        // For user resources, check if they own the resource
        const userId = req.params.userId || req.body.userId;
        if (userId && parseInt(userId) === req.user.id) {
            return next();
        }
    }
    res.status(403).json({ error: 'Access denied' });
};

module.exports = {
    ensureAuthenticated,
    ensureAdmin,
    ensureUserOrAdmin
};