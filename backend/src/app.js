const express = require('express');
const cors = require('cors');
const parkingRoutes = require('./routes/parking');
const reservationRoutes = require('./routes/reservations');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/parking', parkingRoutes);
app.use('/api/reservations', reservationRoutes);


app.get('/', (req, res) => res.send('Smart Parking API'));
module.exports = app;