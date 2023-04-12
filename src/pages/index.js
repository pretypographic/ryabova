import './index.css';

import { structure } from '../utils/constants.js';
// import { worksArchive } from '../utils/data.js';

import { Inside } from '../components/Inside.js';
import { Hall } from '../components/Hall.js';
import { Wing } from '../components/Wing.js';
import { Room } from '../components/Room.js';
import { Foyer } from '../components/Foyer.js';
import { ReadingRoom } from '../components/ReadingRoom.js';
import { Gallery } from '../components/Gallery.js';
import { Nav } from '../components/Nav.js';
import { Tumbler } from '../components/Tumbler.js';
import { Popup } from '../components/Popup.js';

const workshop = new Inside({
    perimeter: structure.inside.perimeter,
    creator: (hall) => {
        return new Hall(hall);
    }
});

const popup = new Popup(structure.infrastructure.services.popup);

const prime = new Hall({
    location: structure.inside.hall.prime.location,
    interior: structure.inside.hall.prime.interior,
    exit: structure.inside.hall.prime.exit,
    creator: (item, interior) => {
        return new Foyer({
            item: item, 
            interior: interior, 
            call: (item) => {
                headerNav.toggleOffIndicator();
                exit();
                workshop.enterStructure(exhibition);
                exhibition.enterStructure(item);
            }
        });
    }
});

const library = new Hall({
    location: structure.inside.hall.library.location,
    interior: structure.inside.hall.library.interior,
    exit: structure.inside.hall.library.exit,
    creator: (item, interior) => {
        return new ReadingRoom({
            item: item, 
            interior: interior,
            call: (item) => {
                headerNav.toggleOffIndicator();
                exit();
                workshop.enterStructure(exhibition);
                exhibition.enterStructure(item);
            }
        });
    }
});

const exhibition = new Wing({
    location: structure.inside.hall.exhibition.wing,
    exit: structure.inside.hall.exhibition.exit,
    creator: (item) => {
        return new Gallery(item, popup);
    }
});

const office = new Room({
    location: structure.outside.hostOffice.corner,
    exit: structure.outside.hostOffice.passage
});

const officeTumbler = new Tumbler(structure.outside.hostOffice.interface, {
    imposer: () => {
        headerNav.toggleOffIndicator();
        exit();
        workshop.enterStructure(office);
        officeTumbler.isSelected = true;
    }
});

const exhibitionTumbler = new Tumbler(structure.outside.scheme.interface.exhibitionHallTumbler, {
    imposer: () => {
        workshop.enterStructure(prime);
        prime.enterStructure(structure.inside.room.foyer);
    }
});

const libraryTumbler = new Tumbler(structure.outside.scheme.interface.libraryTumbler, {
    imposer: () => {
        workshop.enterStructure(library);
        library.enterStructure(structure.inside.room.lobby);
    }
});

const classroomTumbler = new Tumbler(structure.outside.scheme.interface.classroomTumbler, {
    imposer: () => {
        console.log('structure.inside.room.hallway');
    }
});

const conferencesAuditoriumTumbler = new Tumbler(structure.outside.scheme.interface.conferencesAuditoriumTumbler, {
    imposer: () => {
        console.log('structure.inside.room.lounge');
    }
});

const headerNav = new Nav(structure.outside.scheme.corner, structure.outside.scheme.interface.tumblerIndicator, {
    deselecter: () => {
        exhibitionTumbler.isSelected = false;
        libraryTumbler.isSelected = false;
        classroomTumbler.isSelected = false;
        conferencesAuditoriumTumbler.isSelected = false;
    },
    call: () => {
        officeTumbler.isSelected = false;
        exit();
    }
});

const exit = () => {
    prime.exitStructure();
    library.exitStructure();
    exhibition.exitStructure();
    office.exitStructure();
}

headerNav.animateNav();
officeTumbler.setEventListener();
exhibitionTumbler.setEventListener();
libraryTumbler.setEventListener();
classroomTumbler.setEventListener();
conferencesAuditoriumTumbler.setEventListener();
popup.setEventListeners();

exhibitionTumbler.isSelected = true;
workshop.enterStructure(prime);
prime.enterStructure(structure.inside.room.foyer);