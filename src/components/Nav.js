class Nav {
    constructor(corner, indicator, { deselecter, call }) {
        this._nav = Array.from(document.querySelector(`.${corner}`).children);
        this._indicator = indicator;
        this._indicatorOn = true;
        this._deselecter = deselecter;
        this._call = call;
    }

    _defineSelectedButton () {
        return this._nav.find((tumbler) => {
            return tumbler.classList.contains(this._indicator);
        });
    }

    toggleOffIndicator() {
        if(this._indicatorOn) {
            this._deselecter();
            this._selectedButton = this._defineSelectedButton();
            this._selectedButton.classList.remove(this._indicator);
            this._indicatorOn = false;
        }
    }

    switchSection (tumbler) {
        this.toggleOffIndicator();
        tumbler.classList.add(this._indicator);
        this._indicatorOn = true;
    }

    _setEventListeners(tumbler) {
        tumbler.addEventListener('click', () => {
            if (!tumbler.classList.contains(this._indicator)) {
                this._call();
                this.switchSection(tumbler);
            }
        });
    }

    animateNav() {
        this._nav.forEach((tumbler) => {
            this._setEventListeners(tumbler);
        })
    }
};

export { Nav }
