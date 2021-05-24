import Packet from "../interface/Packet";
import Task from "../task/Task";

class ScheduleTaskPacket implements Packet {
    type = "task"
    constructor(task: Task) {
        this.task = task
    }
    task: Task
}

export default ScheduleTaskPacket