class Article {
    constructor(selector, project) {
        this._selector = selector;
        this._projectImage = project.image;
        this._projectTitle = project.title;
        this._alt = `Image: ${project.title}.`;
    }

    _createArticle() {
        return document.querySelector(this._selector).content.querySelector('.article').cloneNode(true);
    }

    makeArticle() {
        this._article = this._createArticle();
        this._articleImage = this._article.querySelector('.article__image');
        this._articleImage.setAttribute('src', this._projectImage);
        this._articleImage.setAttribute('alt', this._alt);
        this._articleTitle = this._article.querySelector('.article__title');
        this._articleTitle.textContent = this._projectTitle;
        return this._article;
    }
};

export { Article }