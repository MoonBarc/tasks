class TaskStatistics {
    tasks: {
        running: number;
        /**
         * when 0, it doesn't show on panel.
         */
        max: number;
    }
    nodes: {
        online: number,
        faulty: number
    }

    constructor() {
        this.nodes = {
            online: 0,
            faulty: 0
        }
        this.tasks = {
            running: 0,
            max: 0
        }
    }
}

export default new TaskStatistics()
export { TaskStatistics }