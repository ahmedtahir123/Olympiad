const express = require('express');
const router = express.Router();

// Import your database functions here
const {
    getEvents,
    createSession,
    getSessions
    // getParticipants,
    // ... other functions

} = require('./dbFunctions');

// Define routes
router.get('/events', getEvents);
router.post('/sessions', createSession);
router.get('/get-session', getSessions);
// router.get('/participants', getParticipants);
// ... other routes

module.exports = router;
