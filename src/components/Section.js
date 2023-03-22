class Section {
    constructor({ renderer }, selector) {
        this._renderer = renderer;
        this._section = document.querySelector(`.${selector}`);
    }

    renderArticles(items) {
        items.forEach((item) => {
            this.addItem(item);
        })
    }

    addItem(item) {
        this._item = this._renderer(item);
        this._section.prepend(this._item.makeArticle());
    }

    clearSction() {
        this._section.innerHTML = '';
    }
};

export { Section }
