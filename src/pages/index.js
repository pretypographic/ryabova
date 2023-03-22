import { sence } from "../utils/constants.js";
import { worksArchive } from "../utils/data.js";

import { Article } from "../components/Article.js";
import { Section } from "../components/Section.js";
import { Nav } from "../components/Nav.js";
import { Button } from "../components/Button.js";

const projectSection = new Section({
    renderer: (item) => {
        return new Article(sence.articleTemplate, item);
    }
}, sence.projectSection);
projectSection.renderArticles(worksArchive.projects);

const projectsButton = new Button(sence.projectsButton, {
    imposer: () => {
        projectSection.renderArticles(worksArchive.projects);
    },
    eraser: () => {
        projectSection.clearSction();
    }
});
projectsButton.setEventListener();

const textsButton = new Button(sence.textsButton, {
    imposer: () => {
        projectSection.renderArticles(worksArchive.texts);
    },
    eraser: () => {
        projectSection.clearSction();
    }
});
textsButton.setEventListener();

const aboutButton = new Button(sence.aboutButton, {
    imposer: () => {
        console.log('imposer');
    },
    eraser: () => {
        projectSection.clearSction();
    }
});
aboutButton.setEventListener();

const headerNav = new Nav(sence.headerNav, sence.stateClass, {
    deselecter: () => {
        projectsButton._isSelected = false;
        textsButton._isSelected = false;
        aboutButton._isSelected = false;
    }
});
headerNav.animateNav();