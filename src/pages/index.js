import './index.css'

import { structure } from '../utils/constants.js';

import { Inside } from '../components/Inside.js';
import { Room } from '../components/Room.js';
import { Navigation } from '../components/Navigation.js';
import { Gallery } from '../components/Gallery.js';
import { Nav } from '../components/Nav.js';
import { Tumbler } from '../components/Tumbler.js';

const workshop = new Inside({
    perimeter: structure.inside.perimeter,
    creator: (room) => {
        return new Room(room);
    }
});

const prime = workshop.createStructure({
    location: structure.inside.hall.prime.location,
    exit: structure.inside.hall.prime.exit,
    creator: (room) => {
        return new Navigation(room, {
            call: (item) => {
                headerNav.toggleOffIndicator();
                prime.exitStructure();
                workshop.enterStructure(exhibition);
                exhibition.enterStructure2(item);
            }
        });
    }
});

const exhibition = workshop.createStructure({
    location: structure.inside.hall.exhibition.wing,
    exit: structure.inside.hall.exhibition.exit,
    creator: (item) => {
        return new Gallery(item);
    }
});

const exhibitionTumbler = new Tumbler(structure.outside.scheme.interface.exhibitionHallTumbler, {
    imposer: () => {
        prime.enterStructure(structure.inside.room.foyer);
    }
});

const libraryTumbler = new Tumbler(structure.outside.scheme.interface.libraryTumbler, {
    imposer: () => {
        prime.enterStructure(structure.inside.room.lobby);
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
        prime.exitStructure();
        exhibition.exitStructure();
        workshop.enterStructure(prime);
    }
});

headerNav.animateNav();
exhibitionTumbler.setEventListener();
libraryTumbler.setEventListener();
classroomTumbler.setEventListener();
conferencesAuditoriumTumbler.setEventListener();

exhibitionTumbler.isSelected = true;
workshop.enterStructure(prime);
prime.enterStructure(structure.inside.room.foyer);