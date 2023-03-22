class Button {
    constructor(button, { imposer, eraser }) {
        this._button = button;
        this._imposer = imposer;
        this._eraser = eraser;
        this._isSelected = false;
    }

    setEventListener() {
        this._button.addEventListener('click', () => {
            console.log(this._isSelected);
            if(this._isSelected === false) {
                this._eraser();
                this._imposer();
                this._isSelected = true;
            }
        })
    }
};

export { Button }
