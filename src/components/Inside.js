class Inside {
    constructor({ perimeter, creator }) {
        this._perimeter = perimeter;
        this._creator = creator;
    }

    createStructure(room) {
        return this._creator(room);
    }

    enterStructure(Room) {
        this._perimeter.prepend(Room.createStructure());
    }
};

export { Inside }