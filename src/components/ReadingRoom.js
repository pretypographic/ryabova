class ReadingRoom {
    constructor({ item, interior, call }) {
        this._title = item.content.title;
        this._interior = interior;
        this._call = call;
        this._item = item;
    }

    _addInterior() {
        return document.querySelector(this._interior).content.querySelector(`.article_type_responsive`).cloneNode(true);
    }

    createInterior() {
        this._interior = this._addInterior();
        this._interiorTitle = this._interior.querySelector('.article__title');
        this._interiorTitle.textContent = this._title;
        this._setEventListener();
        return this._interior;
    }

    _action() {
        this._call(this._item);
        this._removeEventListener();
    }

    _setEventListener() {
        this._interior.addEventListener('click', this._action.bind(this));
    }

    _removeEventListener() {
        this._interior.removeEventListener('click', this._action);
    }
};

export { ReadingRoom }