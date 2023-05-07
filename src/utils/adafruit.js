import mqtt from "precompiled-mqtt";
const key = process.env.REACT_APP_KEY
const username = process.env.REACT_APP_NAME
console.log(username)

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
const options = {
    port: 443
}

const client = mqtt.connect(brokerUrl,options);
client.on('connect', () => {
    console.log("Connected to Adafruit!")
});
client.on('disconnect', () => {
    console.log("Disconnected to Adafruit!")
})

client.on('message', (topic, message, packet) => {
        console.log("Received '" + message + "' on '" + topic + "'");
})

function subscribe(feed_id){
    client.subscribe(username + "/feeds/" + feed_id,()=>{
        console.log("Subscribed to " + feed_id)
    })
}
subscribe('bbc-humid')
subscribe('bbc-light')
// subscribe('weather-status')
subscribe('bbc-temp')
subscribe('bbc-fan')
subscribe('bbc-led')

export default client;
export function publish(feed_id,data){
    client.publish(username + "/feeds/" + feed_id,data,()=>{
        console.log("Published to " + feed_id + " : " + data);
    })
}