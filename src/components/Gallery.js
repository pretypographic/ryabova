import { Interior } from "./Interior.js";

class Gallery extends Interior {
    constructor(item, popup) {
        super(item);
        this._popup = popup;
        this._layout = '#galleryEntrance'
        this._header = '.article_type_header';
        this._explication = '.article_type_explication';
        this._exposition = '.article_type_exposition';
    }

    _beginHeader() {
        return document.querySelector(this._layout).content.querySelector(this._header).cloneNode(true);
    }

    _beginExplication() {
        return document.querySelector(this._layout).content.querySelector(this._explication).cloneNode(true);
    }

    _beginExposition() {
        return document.querySelector(this._layout).content.querySelector(this._exposition).cloneNode(true);
    }

    _createGalleryHeader() {
        this._galleryHeaderTitle = this._galleryHeader.querySelector('.article__title');
        this._galleryHeaderTitle.textContent = this._title;
    }

    _createGalleryExplication() {
        this._text.forEach((string) => {
            const paragraph = document.createElement('p');
            paragraph.classList.add('article__text');
            paragraph.textContent = string;
            this._galleryExplication.append(paragraph);
        })
    }

    _createGalleryExposition() {
        this._images.forEach((image) => {
            const frame = document.createElement('img');
            frame.classList.add('article__image');
            frame.setAttribute('src', image);
            frame.addEventListener('click', () => {
                this._popup.openPopup(image);
            });
            // frame.setAttribute('alt', `Image: ${this._title}.`);
            this._galleryExposition.append(frame);
        })
    }

    _addGalleryHeader() {
        this._galleryHeader = this._beginHeader();
        this._createGalleryHeader();
        return this._galleryHeader;
    }

    _addGalleryExplication() {
        this._galleryExplication = this._beginExplication();
        this._createGalleryExplication();
        return this._galleryExplication;
    }

    _addGalleryExposition() {
        this._galleryExposition = this._beginExposition();
        this._createGalleryExposition();
        return this._galleryExposition;
    }

    _addInterior() {
        this._gallery = document.createElement('div');
        if(this._header) {
            this._gallery.append(this._addGalleryHeader());
        }
        if(this._explication) {
            this._gallery.append(this._addGalleryExplication());
        }
        if(this._images) {
            this._gallery.append(this._addGalleryExposition());
        }
    }

    createInterior() {
        this._addInterior();
        return this._gallery;
    }
};

export { Gallery }