const mqtt = require('mqtt');

class MqttHandler {

  constructor() {
    this.client = null;
    this.host = 'mqtt://localhost';
  }

  connect() {
    this.client = mqtt.connect(this.host);

    this.client.on('error', (err) => {
      console.log(err);
      this.client.end();
    });

    this.client.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    this.client.subscribe('test', { qos: 0 });

    this.client.on('message', (topic, message) => {
      console.log(topic, message.toString());
    });

    this.client.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }
}

module.exports = MqttHandler;