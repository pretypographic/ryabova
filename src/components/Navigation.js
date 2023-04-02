import { Interior } from "./Interior.js";

class Navigation extends Interior {
    constructor(item, { call } ) {
        super(item);
        this._layout = '#interior';
        this._type = 'article_type_responsive';
        this._call = call;
        this._item = item;
    }

    _addInterior() {
        return document.querySelector(this._layout).content.querySelector(`.${this._type}`).cloneNode(true);
    }

    createInterior() {
        this._interior = this._addInterior();
        if (this._cover) {
            this._interiorCover = this._interior.querySelector('.article__image');
            this._interiorCover.setAttribute('src', this._cover);
            this._interiorCover.setAttribute('alt', `Cover: ${this._title}.`);
        } else {
            this._interior.querySelector('.article__image').remove();
            this._interiorCover = document.createElement('div');
            this._interiorCover.classList.add('article__cover');
            this._interiorTextCover = document.createElement('p');
            this._interiorTextCover.classList.add('article__text-cover');
            this._interiorTextCover.textContent = this._text;
            this._interiorCover.prepend(this._interiorTextCover);
            this._interior.prepend(this._interiorCover);
        };
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

export { Navigation }