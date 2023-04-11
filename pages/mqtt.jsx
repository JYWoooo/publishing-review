import mqtt from "mqtt";
import { useEffect, useState } from "react";

export default function Mqtt() {
  const host = 'ws://192.168.123.191:9001'
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("Connecting...");
  const [currentTopic, setCurrentTopic] = useState("");
  const [mqttData, setMqttData] = useState({});
  const clientId = "Mqtt-WS-React";
  const topic = "broadcast/monitoring/localhost/system/network";
  const [networkInfo, setNetworkInfo] = useState(null);

  const options = {
    keepalive: 600,
    clientId: `${clientId} + ${Math.random().toString(16).substr(2, 8)}`,
    protocolId: "MQTT",
    protocolVersion: 5,
    clean: true,
    reconnectPeriod: 0,
    // connectTimout: 30 * 1000,
    qos: 1,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 1,
      retain: false,
    },
    rejectUnauthorized: false,
    username: "admin",
    password: "a20363a1c86fc5e23c725847ead80427",
  };

  useEffect(() => {
    console.log("MQTT WS CONNECTING...");
    setClient(mqtt.connect(host, options));
  }, [host]);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        console.log("MQTT WS CONNECT !");
        setConnectStatus(`Connected !`);
      });
      // connection error
      client.on("error", (err) => {
        console.log(`Connection error: ${err}`);
        setConnectStatus(`Connection error: ${err}`);
        client.end();
      });
      // reconnect
      client.on("reconnect", () => {
        console.log(`Reconnecting...`);
        setConnectStatus(`Reconnecting...`);
      });
      client.on("close", function () {
        console.log("Disconnected");
      });
    }
  }, [client]);

  if (client) {
    client.subscribe(
      topic,
      {
        qos: 1,
      },
      (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      }
    );
  }

  useEffect(() => {
    if (client) {
      client.on("message", (topic, message) => {
        const mqttWsData = JSON.parse(message.toString());
        setMqttData(() => mqttWsData);
        setCurrentTopic(() => topic);
      });
    }
  }, [client]);

  useEffect(() => {
    if (currentTopic.includes("/network")) {
      setNetworkInfo(mqttData);
    }
  }, [mqttData]);

  const bpsSpeedA = networkInfo?.interfaces[0]?.speed / 1000000;
  const rxBytes = networkInfo?.interfaces[0].statistics.rx_bytes;

  return (
    <div>
      mqtt: {bpsSpeedA}
      bytes: {rxBytes}
    </div>
  )
}