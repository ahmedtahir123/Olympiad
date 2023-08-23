const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api', routes);