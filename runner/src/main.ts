import TaskStatus from "./enum/TaskStatus";
import TaskType from "./enum/TaskType";
import levels from "./Logger";
import ConnectionClient from "./nodeconnector/ConnectionClient";
import Task from "./nodeconnector/Task";
import TaskRunner from "./nodeconnector/TaskRunner";

levels.INFO.log("Runner server starting")
const client = new ConnectionClient("ws://localhost:4012")
const runner = new TaskRunner()

client.on("task", (task: Task) => {
    runner.run(task)
})