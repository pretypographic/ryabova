class Interior {
    constructor(item) {
        this._cover = item.content.cover;
        this._title = item.content.title;
        this._text = item.content.text;
        this._images = item.content.images;
    }
};

export { Interior }