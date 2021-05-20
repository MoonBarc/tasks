import Interactable from "../interface/Interactable";

class Comment {
    author: Interactable
    message: string

    constructor(author: Interactable, message: string) {
        this.author = author;
        this.message = message;
    }
}

export default Comment