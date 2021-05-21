/**
 * For Node Server
 */
enum NodeSocketError {
    /**
     * JSON wasn't readable by parser
     */
    BAD_JSON,
    /**
     * Socket didn't get activated yet.
     */
    NOT_ACTIVATED,
    /**
     * Required argument was not provided
     */
    BAD_ARGUMENTS
}

export { NodeSocketError }