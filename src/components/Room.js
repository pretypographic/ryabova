class Room {
    constructor({ location, exit }) {
        this._location = location;
        this._exit = exit;
        this._doorOpened = false;
    }
    _addRoom() {
        return document.querySelector(this._exit).content.querySelector(`.${this._location}`).cloneNode(true);
    }

    createStructure() {
        this._room = this._addRoom();
        this._doorOpened = true;
        return this._room;
    }

    exitStructure() {
        if (this._doorOpened) {
            this._room.remove();
            this._doorOpened = false;
        }
    }
};

export { Room }
