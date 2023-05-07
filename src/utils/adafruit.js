import mqtt from "precompiled-mqtt";
import axios from 'axios';

const key = process.env.REACT_APP_KEY;
const username = process.env.REACT_APP_NAME;
console.log("in adaf.js");

export async function getData(feed_id) {
  const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data?limit=7`;
  const options = {
    headers: {
      'X-AIO-Key': key,
    }
  };
  let res = await axios.get(url, options);
  console.log("Sent request for feed_id:", feed_id);
  return res.data.map(e => e.value).reverse();
}

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`;
const options = {
  port: 443
};

const client = mqtt.connect(brokerUrl, options);
client.on('connect', () => {
  console.log("Connected to Adafruit!");
});
client.on('disconnect', () => {
  console.log("Disconnected from Adafruit!");
});

client.on('message', (topic, message, packet) => {
  console.log("Received '" + message + "' on '" + topic + "'");
});

function subscribe(feed_id) {
  client.subscribe(username + "/feeds/" + feed_id, () => {
    console.log("Subscribed to feed_id:", feed_id);
  });
}

subscribe('bbc-humid');
subscribe('bbc-light');
// subscribe('weather-status');
subscribe('bbc-temp');
subscribe('bbc-fan');
subscribe('bbc-led');

export default client;

export function publish(feed_id, data) {
  console.log("Publishing to feed_id:", feed_id);
  client.publish(username + "/feeds/" + feed_id, data, () => {
    console.log("Published to feed_id:", feed_id, "data:", data);
  });
}
