const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./src/api');
const MqttService = require('./src/mqtt_service');
const services = require('./src/services');
const passport = require('passport');
const errorHandler = require('./src/middleware/error_handler');

const app = express();
const port = process.env.port || 3000;

const mqttService = new MqttService.mqttService();

app.set('json spaces', 2);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(errorHandler);

(async () => {
  mqttService.start();
  services.auth.config(passport);
  await services.init();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
})();