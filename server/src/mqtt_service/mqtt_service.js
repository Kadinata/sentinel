const mqtt = require('mqtt');

class MqttService {

  constructor(host = "mqtt://localhost") {
    this.client = null;
    this.host = host;
  }

  publish(topic, message) {
    if (this.client !== null) return;
  }

  subscribe(topic) {
    if (this.client !== null) return;
    this.client.subscribe(topic);
  }

  start() {
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
      console.log(`service: mqtt client disconnected`);
      this.client.end();
    });
  }

  disconnect() {
    if (this.client !== null) return;
    this.client.end();
  }
}

module.exports = MqttService;