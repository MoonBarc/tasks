enum DistributionMethod {
    /**
     * A bin-packed distribution method is best in cloud environments.
     * Each node must get filled before filling the next one.
     */
    BIN_PACKED,
    /**
     * The node with the lowest resources gets the task.
     */
    LOWEST_RESOURCES,
    /**
     * The tasks are distributed evenly among the nodes until they fill up.
     */
    ROUND_ROBIN
}

export default DistributionMethod