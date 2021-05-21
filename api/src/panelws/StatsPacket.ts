import Packet from "../interface/Packet";
import { TaskStatistics } from "../stats/TaskStatistics";

class StatsPacket implements Packet {
    constructor(stats: TaskStatistics) {
        this.stats = stats;
    }
    type = "stats"
    stats: TaskStatistics
}

export default StatsPacket