import levels from "./class/Logger";
import NodeServer from "./nodeconnector/NodeServer";
import PanelServer from "./panelws/PanelServer";

const ports = {
    nodeserver: 4012,
    panelserver: 3001
}

levels.INFO.log("Welcome, starting...")

const panel = new PanelServer(3001)
levels.API.log("Panel API up at " + ports.panelserver)

new NodeServer(4012, panel)
levels.NODES.log("Node Connector API up at " + ports.nodeserver)