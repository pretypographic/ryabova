// class Room {
//     constructor({ location, exit, creator }) {
//         this._location = location;
//         this._exit = exit;
//         this._creator = creator;
//     }
//     _addRoom() {
//         return document.querySelector(this._exit).content.querySelector(`.${this._location}`).cloneNode(true);
//     }

//     createStructure() {
//         this._room = this._addRoom();
//         return this._room;
//     }

//     enterStructure(interior) {
//         interior.forEach((object) => {
//             this._object = this._creator(object);
//             this._room.append(this._object.createObject());
//         });
//     }

//     passRoom() {
//         this._room.innerHTML = '';
//     }

//     exitStructure() {
//         this._room.remove();
//     }
// };

// export { Room }
