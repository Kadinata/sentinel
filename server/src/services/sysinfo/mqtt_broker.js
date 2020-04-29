//===========================================================================
//  
//===========================================================================
const mqtt = require('mqtt');
const { once } = require('../../utils/event_utils');

const LOOPBACK_TOPIC = "test/loopback";
const LOOPBACK_MESSAGE = "loopback status";
const MQTT_HOST = "mqtt://localhost";

let mqtt_client = null;

const init_client = async (host = MQTT_HOST) => {
  if (mqtt_client) return Promise.resolve();

  mqtt_client = mqtt.connect(host);

  return new Promise((resolve, reject) => {
    mqtt_client.once('offline', () => resolve());
    mqtt_client.on('connect', () => {
      mqtt_client.subscribe(LOOPBACK_TOPIC, () => resolve());
    });
  });
};

const brokerOnline = async () => {
  try {
    await init_client();
    if (!mqtt_client.connected) return false;
    mqtt_client.publish(LOOPBACK_TOPIC, LOOPBACK_MESSAGE);
    const { value: [topic, message] } = await once(mqtt_client, 'message');
    return (topic == LOOPBACK_TOPIC) && (message.toString() == LOOPBACK_MESSAGE);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = async () => {
  try {
    const online = await brokerOnline();
    return ({ online });
  } catch (err) {
    return Promise.reject(err);
  }
};

//===========================================================================