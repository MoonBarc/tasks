import TaskStatus from "../enum/TaskStatus";
import Task from "./Task";
import * as Docker from "dockerode"
import levels from "../Logger";

class TaskRunner {
    docker: Docker
    container: Docker.Container
    constructor(opts?: Docker.DockerOptions) {
        this.docker = new Docker(opts)
    }

    run(task: Task) {
        if(task.status != TaskStatus.QUEUED) {
            throw new Error("Attempted to start a task that was not QUEUED.")
        }
        task.status = TaskStatus.STARTING
        this.docker.run(task.image, task.command, /* TODO: don't use stdout */ process.stdout).then(data => {
            console.log(data[0])
            this.container = data[1]
            return this.container.remove()
        }).then(() => {
            levels.DOCKER.log("Container execution completed and removed.")
        }).catch(e => {
            levels.ERROR.log("An error occured while running/removing the container.")
            console.warn(e)
        })
    }
}

export default TaskRunner