import levels from "./Logger";
import ConnectionClient from "./nodeconnector/ConnectionClient";

levels.INFO.log("Runner server starting")
const client = new ConnectionClient("ws://localhost:4012")