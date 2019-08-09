const express = require('express');
const sysinfo = require('./src/sysinfo/');
const mqttHandler = require('./src/mqtt_handler');

const app = express();
const port = process.env.port || 3000;

const mqttClient = new mqttHandler();
mqttClient.connect();

app.set('json spaces', 2);

app.get('/', (req, res) => {
  const message = 'Hello from Pi 3A! 😃';
  sysinfo.fetchAll().then(data => {
    res.json({message, ...data});
  }).catch(error => {
    res.send('Server error!');
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});