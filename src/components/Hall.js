class Hall {
    constructor({ location, interior, exit, creator }) {
        this._location = location;
        this._interior = interior;
        this._exit = exit;
        this._creator = creator;
        this._doorOpened = false;
    }
    _addHall() {
        return document.querySelector(this._exit).content.querySelector(`.${this._location}`).cloneNode(true);
    }

    createStructure() {
        this._hall = this._addHall();
        this._doorOpened = true;
        return this._hall;
    }

    enterStructure(room) {
        room.forEach((item) => {
            this._item = this._creator(item, this._interior);
            this._hall.append(this._item.createInterior());
        });
    }

    exitStructure() {
        if (this._doorOpened) {
            this._hall.remove();
            this._doorOpened = false;
        }
    }
};

export { Hall }
