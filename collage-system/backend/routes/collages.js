const express = require('express');
const router = express.Router();
const { collageQueries } = require('../models/database');
const { ensureAuthenticated, ensureUserOrAdmin } = require('../middleware/auth');

// Get all collages for authenticated user
router.get('/user/:userId', ensureUserOrAdmin, (req, res) => {
    const userId = req.params.userId;
    
    collageQueries.findByUserId(userId, (err, collages) => {
        if (err) {
            console.error('Error fetching collages:', err);
            return res.status(500).json({ error: 'Failed to fetch collages' });
        }
        res.json(collages);
    });
});

// Get a specific collage
router.get('/:id', ensureAuthenticated, (req, res) => {
    const collageId = req.params.id;
    
    collageQueries.findById(collageId, (err, collage) => {
        if (err) {
            console.error('Error fetching collage:', err);
            return res.status(500).json({ error: 'Failed to fetch collage' });
        }
        
        if (!collage) {
            return res.status(404).json({ error: 'Collage not found' });
        }
        
        // Check if user owns the collage or is admin
        if (collage.user_id !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }
        
        res.json(collage);
    });
});

// Create a new collage
router.post('/', ensureAuthenticated, (req, res) => {
    const { title, description, imageData, layoutConfig, canvasSize, options } = req.body;
    
    if (!title || !imageData || !layoutConfig) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const collageData = {
        userId: req.user.id,
        title,
        description,
        imageData: JSON.stringify(imageData),
        layoutConfig: JSON.stringify(layoutConfig),
        canvasSize,
        options: JSON.stringify(options)
    };
    
    collageQueries.create(collageData, (err, newCollage) => {
        if (err) {
            console.error('Error creating collage:', err);
            return res.status(500).json({ error: 'Failed to create collage' });
        }
        res.status(201).json(newCollage);
    });
});

// Update a collage
router.put('/:id', ensureAuthenticated, (req, res) => {
    const collageId = req.params.id;
    const { title, description, imageData, layoutConfig, canvasSize, options } = req.body;
    
    // First check if collage exists and user owns it
    collageQueries.findById(collageId, (err, collage) => {
        if (err) {
            console.error('Error fetching collage:', err);
            return res.status(500).json({ error: 'Failed to fetch collage' });
        }
        
        if (!collage) {
            return res.status(404).json({ error: 'Collage not found' });
        }
        
        if (collage.user_id !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }
        
        const updateData = {
            title,
            description,
            imageData: JSON.stringify(imageData),
            layoutConfig: JSON.stringify(layoutConfig),
            canvasSize,
            options: JSON.stringify(options)
        };
        
        collageQueries.update(collageId, updateData, (err) => {
            if (err) {
                console.error('Error updating collage:', err);
                return res.status(500).json({ error: 'Failed to update collage' });
            }
            res.json({ message: 'Collage updated successfully' });
        });
    });
});

// Delete a collage
router.delete('/:id', ensureAuthenticated, (req, res) => {
    const collageId = req.params.id;
    
    // First check if collage exists and user owns it
    collageQueries.findById(collageId, (err, collage) => {
        if (err) {
            console.error('Error fetching collage:', err);
            return res.status(500).json({ error: 'Failed to fetch collage' });
        }
        
        if (!collage) {
            return res.status(404).json({ error: 'Collage not found' });
        }
        
        if (collage.user_id !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }
        
        collageQueries.delete(collageId, (err) => {
            if (err) {
                console.error('Error deleting collage:', err);
                return res.status(500).json({ error: 'Failed to delete collage' });
            }
            res.json({ message: 'Collage deleted successfully' });
        });
    });
});

module.exports = router;