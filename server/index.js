const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./src/api');
const MqttService = require('./src/mqtt_service');
const services = require('./src/services');

const app = express();
const port = process.env.port || 3000;

const mqttService = new MqttService.mqttService();
mqttService.start();

app.set('json spaces', 2);

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

services.init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});