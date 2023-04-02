class Tumbler {
    constructor(tumbler, { imposer }) {
        this._tumbler = tumbler;
        this._imposer = imposer;
        this.isSelected = false;
    }

    setEventListener() {
        this._tumbler.addEventListener('click', () => {
            if(this.isSelected === false) {
                this._imposer();
                this.isSelected = true;
            }
        })
    }
};

export { Tumbler }
