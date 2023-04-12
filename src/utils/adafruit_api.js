import mqtt from "precompiled-mqtt";

export default class MQTTAdafruitIO{
    constructor(username,key,options,setter){
        this.username = username
        this.key = key
        this.brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
        this.options = options
        this.client = null
        this.setter = setter
    }

    connect(){
        this.client = mqtt.connect(this.brokerUrl,this.options);
        console.log("run here")
        this.client.on('connect', () => {
            console.log("Connected to Adafruit!")
        });
        this.client.on('message', (topic, message, packet) => {
            console.log("Received '" + message + "' on '" + topic + "'");
            switch (topic){
                case 'bbc-humid':
                    this.setter.setHumidity(parseInt(message.toString()));
                    break;
                case 'bbc-temp':
                    this.setter.setTemperature(parseInt(message.toString()));
                    break;
                case 'bbc-light':
                    this.setter.setLightIntensity(parseInt(message.toString()));
                    break;
                case 'bbc-fan':
                    this.setter.setAirBtn(parseInt(message.toString()));
                    break;
                case 'bbc-pump':
                    this.setter.setPumperBtn(parseInt(message.toString()));
                    break;
                case 'bbc-led':
                    this.setter.setLightBtn(parseInt(message.toString()));
                    break;
            }
        });
        this.client.on('disconnect', () => {
            console.log("Disconnected to Adafruit!")
        })
    }

    subscribe(feed_id){
        this.client.subscribe(this.username + "/feeds/" + feed_id,()=>{
            console.log("Subscribed to " + feed_id)
        })
    }

    publish(feed_id,data){
        client.publish(this.username + "/feeds/" + feed_id,data,()=>{
            console.log("Published to " + feed_id + " : " + data);
        })
    }

}