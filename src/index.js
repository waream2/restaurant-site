import { initialLoadPage } from '/src/initialLoadPage.js'

import { menuPageLoad } from '/src/menuPage.js'

import { aboutPageLoad } from '/src/aboutPage.js'

init();

function createNav() {

    let homeButton = document.getElementById('home-button')
    let menuButton = document.getElementById('menu-button')
    let aboutButton = document.getElementById('about-button')

    homeButton.addEventListener('click', (event) => {
        clearAll();
        initialLoadPage(); 
        createNav();
    });

    menuButton.addEventListener('click', (event) => {
        clearAll();
        menuPageLoad();
        createNav();
    });

    aboutButton.addEventListener('click', (event) => {
        clearAll();
        aboutPageLoad();
        createNav();
    });
};

function init() {
    initialLoadPage();
    createNav();
};

function clearAll() {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    };
};
