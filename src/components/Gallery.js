import { Interior } from "./Interior.js";

class Gallery extends Interior {
    constructor(item) {
        super(item);
        this._layout = '#galleryEntrance'
        this._poster = '.article_type_poster';
        this._explication = '.article_type_explication';
        this._exposition = '.article_type_exposition';
    }

    _beginPoster() {
        return document.querySelector(this._layout).content.querySelector(this._poster).cloneNode(true);
    }

    _beginExplication() {
        return document.querySelector(this._layout).content.querySelector(this._explication).cloneNode(true);
    }

    _beginExposition() {
        return document.querySelector(this._layout).content.querySelector(this._exposition).cloneNode(true);
    }

    _createGalleryPoster() {
        this._galleryPosterCover = this._galleryPoster.querySelector('.article__image');
        this._galleryPosterCover.setAttribute('src', this._cover);
        this._galleryPosterCover.setAttribute('alt', `Cover: ${this._title}.`);
        this._galleryPosterTitle = this._galleryPoster.querySelector('.article__span');
        this._galleryPosterTitle.textContent = this._title;
    }

    _createGalleryExplication() {
        this._galleryExplicationTitle = this._galleryExplication.querySelector('.article__title');
        this._galleryExplicationTitle.textContent = this._title;
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
            // frame.setAttribute('alt', `Image: ${this._title}.`);
            this._galleryExposition.append(frame);
        })
    }

    _addGalleryPoster() {
        this._galleryPoster = this._beginPoster();
        this._createGalleryPoster();
        return this._galleryPoster;
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
        if(this._poster) {
            this._gallery.append(this._addGalleryPoster());
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