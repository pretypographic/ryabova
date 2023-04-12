import { Interior } from "./Interior.js";

class Foyer extends Interior {
    constructor({ item, interior, call }) {
        super(item);
        this._interior = interior;
        this._call = call;
        this._item = item;
    }

    _addInterior() {
        return document.querySelector(this._interior).content.querySelector(`.article_type_responsive`).cloneNode(true);
    }

    createInterior() {
        this._interior = this._addInterior();
        this._interiorCover = this._interior.querySelector('.article__image');
        this._interiorCover.setAttribute('src', this._cover);
        this._interiorCover.setAttribute('alt', `Cover: ${this._title}.`);
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

export { Foyer }
