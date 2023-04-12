class Inside {
    constructor({ perimeter, creator }) {
        this._perimeter = perimeter;
        this._creator = creator;
    }

    enterStructure(Room) {
        this._perimeter.prepend(Room.createStructure());
    }
};

export { Inside }