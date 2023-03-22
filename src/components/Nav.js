class Nav {
    constructor(nav, stateClass, { deselecter }) {
        this._nav = nav;
        this._stateClass = stateClass;
        this._deselecter = deselecter;
    }

    _defineSelectedButton () {
        return this._nav.find((navButton) => {
            return navButton.classList.contains(this._stateClass);
        });
    }

    _switchSection (navButton) {
        this._selectedButton = this._defineSelectedButton();
        this._selectedButton.classList.remove(this._stateClass);
        navButton.classList.add(this._stateClass);
    }

    _setEventListeners(navButton) {
        navButton.addEventListener('click', () => {
            if (!navButton.classList.contains(this._stateClass)) {
                this._deselecter();
                this._switchSection(navButton);
            }
        }); 
    }

    animateNav() {
        this._nav.forEach((navButton) => {
            this._setEventListeners(navButton);
        })
    }
};

export { Nav }
