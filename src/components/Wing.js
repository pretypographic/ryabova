import { Hall } from "./Hall.js";

class Wing extends Hall {
    constructor(hall) {
        super(hall);
    }

    enterStructure(item) {
        this._item = this._creator(item);
        this._hall.append(this._item.createInterior());
    }
};

export { Wing }