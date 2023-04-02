class Room {
    constructor({ location, exit, creator }) {
        this._location = location;
        this._exit = exit;
        this._creator = creator;
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

    enterStructure(room) {
        room.forEach((item) => {
            this._item = this._creator(item);
            this._room.append(this._item.createInterior());
        });
    }

    enterStructure2(item) {
        this._item = this._creator(item);
        this._room.append(this._item.createInterior());
    }

    exitStructure() {
        if (this._doorOpened) {
            this._room.remove();
            this._doorOpened = false;
        }
    }
};

export { Room }
