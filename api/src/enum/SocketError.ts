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

/**
 * For API Server
 */
enum APISocketError {
    /**
     * Access was denied for watched resource.
     */
    NO_ACCESS
}

export { APISocketError, NodeSocketError }