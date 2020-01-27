const express = require('express');
const sysinfoRoutes = require('./src/sysinfo');
const mqttHandler = require('./src/mqtt_handler');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

const mqttClient = new mqttHandler();
mqttClient.connect();

app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/sysinfo', sysinfoRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});