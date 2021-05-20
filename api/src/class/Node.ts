import DistributionMethod from "../enum/DistributionMethod"
import Socket from "../interface/Socket"
import Capacity from "./Capacity"

/**
 * A runner node
 */
class Node {

    constructor(socket: Socket, method: DistributionMethod, capacity: Capacity) {
        this.connection = socket;
        this.method = method;
        this.capacity = capacity;
    }

    capacity: Capacity
    method: DistributionMethod
    connection: Socket
}

export default Node