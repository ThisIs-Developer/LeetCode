const express = require('express');
const router = express.Router();
const { collageQueries, userQueries } = require('../models/database');
const { ensureAdmin } = require('../middleware/auth');

// Get all collages (admin only)
router.get('/collages', ensureAdmin, (req, res) => {
    collageQueries.findAll((err, collages) => {
        if (err) {
            console.error('Error fetching all collages:', err);
            return res.status(500).json({ error: 'Failed to fetch collages' });
        }
        
        // Parse JSON fields for each collage
        const parsedCollages = collages.map(collage => ({
            ...collage,
            image_data: JSON.parse(collage.image_data),
            layout_config: JSON.parse(collage.layout_config),
            options: JSON.parse(collage.options)
        }));
        
        res.json(parsedCollages);
    });
});

// Get a specific collage for download (admin only)
router.get('/collages/:id', ensureAdmin, (req, res) => {
    const collageId = req.params.id;
    
    collageQueries.findById(collageId, (err, collage) => {
        if (err) {
            console.error('Error fetching collage:', err);
            return res.status(500).json({ error: 'Failed to fetch collage' });
        }
        
        if (!collage) {
            return res.status(404).json({ error: 'Collage not found' });
        }
        
        // Parse JSON fields
        const parsedCollage = {
            ...collage,
            image_data: JSON.parse(collage.image_data),
            layout_config: JSON.parse(collage.layout_config),
            options: JSON.parse(collage.options)
        };
        
        res.json(parsedCollage);
    });
});

// Get all users (admin only)
router.get('/users', ensureAdmin, (req, res) => {
    const db = require('../models/database').db;
    db.all("SELECT id, email, name, role, created_at FROM users ORDER BY created_at DESC", (err, users) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Failed to fetch users' });
        }
        res.json(users);
    });
});

// Update user role (admin only)
router.put('/users/:id/role', ensureAdmin, (req, res) => {
    const userId = req.params.id;
    const { role } = req.body;
    
    if (!role || !['user', 'admin'].includes(role)) {
        return res.status(400).json({ error: 'Invalid role' });
    }
    
    userQueries.updateRole(userId, role, (err) => {
        if (err) {
            console.error('Error updating user role:', err);
            return res.status(500).json({ error: 'Failed to update user role' });
        }
        res.json({ message: 'User role updated successfully' });
    });
});

// Delete a collage (admin only)
router.delete('/collages/:id', ensureAdmin, (req, res) => {
    const collageId = req.params.id;
    
    collageQueries.delete(collageId, (err) => {
        if (err) {
            console.error('Error deleting collage:', err);
            return res.status(500).json({ error: 'Failed to delete collage' });
        }
        res.json({ message: 'Collage deleted successfully' });
    });
});

// Get dashboard stats (admin only)
router.get('/stats', ensureAdmin, (req, res) => {
    const db = require('../models/database').db;
    
    // Get user count
    db.get("SELECT COUNT(*) as userCount FROM users", (err, userResult) => {
        if (err) {
            console.error('Error fetching user count:', err);
            return res.status(500).json({ error: 'Failed to fetch stats' });
        }
        
        // Get collage count
        db.get("SELECT COUNT(*) as collageCount FROM collages", (err, collageResult) => {
            if (err) {
                console.error('Error fetching collage count:', err);
                return res.status(500).json({ error: 'Failed to fetch stats' });
            }
            
            // Get recent activity
            db.all(`SELECT c.title, c.created_at, u.name as user_name 
                    FROM collages c 
                    JOIN users u ON c.user_id = u.id 
                    ORDER BY c.created_at DESC 
                    LIMIT 10`, (err, recentActivity) => {
                if (err) {
                    console.error('Error fetching recent activity:', err);
                    return res.status(500).json({ error: 'Failed to fetch stats' });
                }
                
                res.json({
                    userCount: userResult.userCount,
                    collageCount: collageResult.collageCount,
                    recentActivity: recentActivity
                });
            });
        });
    });
});

module.exports = router;