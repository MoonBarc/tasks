enum TaskStatus {
    /**
     * Initial state for tasks. Made it to node and waiting to be executed.
     */
    QUEUED,
    /**
     * Task's container is starting
     */
    STARTING,
    /**
     * Task is running
     */
    RUNNING,
    /**
     * Persistent tasks can be enabled/disabled
     */
    DISABLED,
    /**
     * Task is deleted shortly after this status
     */
    DONE,
    /**
     * oops
     */
    ERROR
}

export default TaskStatus