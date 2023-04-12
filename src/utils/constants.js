import { worksArchive } from "./data.js";

const structure = {
    outside: {
        perimeter: 'header',
        // класс
        hostOffice: {
            corner: 'office',
            // класс
            interface: document.querySelector('#officeTumbler'),
            passage: '#officeEntrance'
        },
        scheme: {
            corner: 'header__nav',
            // класс
            interface: {
                exhibitionHallTumbler: document.querySelector('#projectsTumbler'),
                libraryTumbler: document.querySelector('#textsTumbler'),
                classroomTumbler: document.querySelector('#classroomTumbler'),
                conferencesAuditoriumTumbler: document.querySelector('#conferencesAuditoriumTumbler'),
                tumblerIndicator: 'header__nav-button_selected'
            }
        },
        announcement: {
            corner: 'новости'
            // класс
            // ползущая красная строка, при нажатии открывается архив новостей
        }
    },

    inside: {
        perimeter: document.querySelector('.main'),
        // класс
        hall: {
            prime: {
                location: 'section_hall_prime',
                // класс
                interior: '#primeInterior',
                exit: '#hallPath'
            },
            library: {
                location: 'section_hall_library',
                // класс
                interior: '#libraryInterior',
                exit: '#hallPath'
            },
            exhibition: {
                wing: 'section_hall_exhibition',
                // класс
                exit: '#hallPath'
            }
        },
        room: {
            foyer: worksArchive.projects,
            lobby: worksArchive.texts
        }
    },

    infrastructure: {
        area: 'footer', 
        // класс
        services: {
            popup: {
                classname: 'popup',
                img: 'popup__image',
                span: 'popup__text'
            }
            // может быть ещё режим для чтений?
        }
    }
}

export { structure };