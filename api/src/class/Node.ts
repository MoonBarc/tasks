import DistributionMethod from "../enum/DistributionMethod"
import Socket from "../interface/Socket"
import Capacity from "../interface/Capacity"
import levels from "./Logger";

/**
 * A runner node
 */
class Node {
    constructor(socket: Socket, capacity: Capacity) {
        this.connection = socket;
        this.capacity = capacity;
        levels.VERBOSE.log(socket.id + " has been created with capacity: " + JSON.stringify(capacity))
    }

    capacity: Capacity
    connection: Socket
}

export default Node