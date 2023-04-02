import { worksArchive } from "./data.js";

const structure = {
    outside: {
        perimeter: 'header',
        hostOffice: {
            corner: 'header__title',
            passage: '#officeEntrance'
        },
        scheme: {
            corner: 'header__nav',
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
            // ползущая красная строка, при нажатии открывается архив новостей
        }
    },

    inside: {
        perimeter: document.querySelector('.main'),
        hall: {
            prime: {
                location: 'section_hall_prime',
                exit: '#hallPath'
            },
            exhibition: {
                wing: 'section_hall_exhibition',
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
        services: {
            observation: 'попап'
            // может быть ещё режим для чтений?
        }
    }
}

export { structure };