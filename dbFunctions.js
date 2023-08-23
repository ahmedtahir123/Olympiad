const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'olympiad'
});

connection.connect();

// Define your database functions here
const getEvents = (req, res) => {enu
    connection.query('SELECT * FROM Event', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};


const createSession = (req, res) => {
    const { EventID, VenueID, StartTime, EndTime, RegistrationStart, RegistrationEnd, GameStart, GameEnd } = req.body;

    const query = `
        INSERT INTO Session (EventID, VenueID, StartTime, EndTime, RegistrationStart, RegistrationEnd, GameStart, GameEnd)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [EventID, VenueID, StartTime, EndTime, RegistrationStart, RegistrationEnd, GameStart, GameEnd], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error creating session' });
            return;
        }
        res.json({ message: 'Session created successfully', sessionID: result.insertId });
    });
};

const getSessions = (req, res) => {
    connection.query('SELECT * FROM Session', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};




// ... other functions

module.exports = {
    getEvents,
    createSession,
    getSessions
    // ... other functions
};
