class Paper {
    constructor(selector, project) {
        this._selector = selector;
        this._cover = project.cover;
        this._paper = project.paper;
        this._exposition = project.exposition;
    }
};

export { Paper }