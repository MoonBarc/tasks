import TaskStatus from "../enum/TaskStatus";
import TaskType from "../enum/TaskType";

class Task {
    type: TaskType
    status: TaskStatus
    image: string
    command: string[]

    constructor(type: TaskType, image: string, command: string[], status: TaskStatus = TaskStatus.QUEUED) {
        this.type = type;
        this.status = status;
        this.image = image;
        this.command = command
    }
}

export default Task