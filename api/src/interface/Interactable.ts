import { Permissions } from "../class/Permissions";

/**
 * Indicates that the class can act with the API.
 */
interface Interactable {
    permissions: Permissions,
    generateComment(msg: string)
}

export default Interactable