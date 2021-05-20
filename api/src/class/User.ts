import Interactable from "../interface/Interactable";
import Comment from "./Comment";
import { Permissions } from "./Permissions";

class User extends Resource implements Interactable {

    generateComment(msg: string) {
        return new Comment(this, msg)
    }
    
    permissions: Permissions
}

export default User