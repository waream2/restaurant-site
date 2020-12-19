function createTopMenu() {
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu-row");

    const homeButton = document.createElement("button");
    homeButton.className = "menu-button"
    homeButton.setAttribute('id', 'home-button')
    homeButton.textContent = "Home"

    
    const menuButton = document.createElement("button");
    menuButton.className = "menu-button"
    menuButton.setAttribute('id', 'menu-button')
    menuButton.textContent = "Menu"

    const aboutButton = document.createElement("button");
    aboutButton.className = "menu-button-active"
    aboutButton.setAttribute('id', 'about-button')
    aboutButton.textContent = "About"

    menu.appendChild(homeButton);
    menu.appendChild(menuButton);
    menu.appendChild(aboutButton);

    return menu;
}

function createHeader() {
    let header = document.createElement('div')
        header.className = 'large-square-about'

    let logoContainer = document.createElement('div') 
        logoContainer.className = 'logo-container'   
        header.appendChild(logoContainer)

    let logo = document.createElement('img');
        logo.src = "./Images/logo.png";
        logoContainer.appendChild(logo);

    let textContainer = document.createElement('div')
        textContainer.className = 'text-container'
        header.appendChild(textContainer)

    let headLine = document.createElement('h1');
        headLine.textContent = 'BunzRVA'
        textContainer.appendChild(headLine);

    let bodyCopy = document.createElement('p')
        bodyCopy.textContent = 'Just a couple of bored restaurant employees whipping up delicious burgers during a pandemic. #spreadthebunz'
        textContainer.appendChild(bodyCopy);

    let instagram = document.createElement('p')
        instagram.textContent = 'Instagram: @bunzrva'
        textContainer.appendChild(instagram);

    return header
}






function aboutPageLoad() {
    const content = document.getElementById("content");

    const topMenu = createTopMenu();
    content.appendChild(topMenu);

    const header = createHeader();
    content.appendChild(header)
}

export { aboutPageLoad };