function createTopMenu() {
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu-row");

    const homeButton = document.createElement("button");
    homeButton.className = "menu-button-active"
    homeButton.setAttribute('id', 'home-button')
    homeButton.textContent = "Home"

    
    const menuButton = document.createElement("button");
    menuButton.className = "menu-button"
    menuButton.setAttribute('id', 'menu-button')
    menuButton.textContent = "Menu"

    const aboutButton = document.createElement("button");
    aboutButton.className = "menu-button"
    aboutButton.setAttribute('id', 'about-button')
    aboutButton.textContent = "About"

    menu.appendChild(homeButton);
    menu.appendChild(menuButton);
    menu.appendChild(aboutButton);

    return menu;
}

function createHeader() {
    const header = document.createElement('div');
        header.className = "menu-top";

    const headLine = document.createElement('h1');
        headLine.textContent = "Bunz RVA";
        headLine.className = "right-anchor"

   const image = document.createElement('img');
        image.src = "./Images/logo.png";

    // const subHeadLine = document.createElement('P');
    //     subHeadLine.textContent = `Just a couple of bored restaurant employees \n whipping up delicious burgers during a pandemic #spreadthebunz`

    header.appendChild(image);
    header.appendChild(headLine);
    // header.appendChild(subHeadLine);
    

    return header;

}

function createBottomRow() {


    const bottomRow = document.createElement("div");
        bottomRow.className = "bottom-row";

    // const imageArray = ["./Images/image1.png",
    //                     "./Images/image2.png",
    //                     "./Images/image3.png"]

    const wordArray = ["BEST.","BUNZ.","EVER."]
    
    for (let i=0; i < 3; i++) {
        const smallSquares = [];
        
        const square = document.createElement("div")
        square.className = "small-square"
        square.innerHTML = wordArray[i]
        // square.style.backgroundImage = `url(${imageArray[i]})`

        smallSquares[i] = square;

        bottomRow.appendChild(smallSquares[i]);
    };

    return bottomRow;

}

function initialLoadPage() {

    const content = document.getElementById("content");

    const menu = createTopMenu();
    content.appendChild(menu);

    const header = createHeader();
    content.appendChild(header);

    const bottomRow = createBottomRow();
    content.appendChild(bottomRow);
}

export { initialLoadPage };

