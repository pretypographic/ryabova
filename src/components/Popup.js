class Popup {
    constructor(popup) {
        this._popup = document.querySelector(`.${popup.classname}`);
        this._popupImg = document.querySelector(`.${popup.img}`);
        this._popupDescription = document.querySelector(`.${popup.span}`);
        this._closeByEscape = this._closeByEscape.bind(this);
    }

    openPopup(image) {
        this._popupImg.setAttribute('src', image);

        // this._popupImg.setAttribute('alt', alt);
        // this._popupDescription.textContent = name;

        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEscape);
    };

    closePopup() {
        this._popupImg.setAttribute('src', '');
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEscape);
    };

    _closeByEscape(event) {
        if (event.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup') || event.target.classList.contains('close-button')) {
              this.closePopup();
            }
        })
    }
}

export { Popup };