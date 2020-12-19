function createTopMenu() {
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu-row");

    const homeButton = document.createElement("button");
    homeButton.className = "menu-button"
    homeButton.setAttribute('id', 'home-button')
    homeButton.textContent = "Home"

    
    const menuButton = document.createElement("button");
    menuButton.className = "menu-button-active"
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

   const image = document.createElement('img');
        image.src = "./Images/logo.png";

    const subHeadLine = document.createElement('h1');
        subHeadLine.className = "right-anchor"
        subHeadLine.textContent = "MENU"

    // header.appendChild(headLine);
    header.appendChild(image);
    header.appendChild(subHeadLine);
    

    return header;

}

function createMenu() {

    const menuDiv = document.createElement('div');
    
    //creates an empty array for each menu item
    const menuArray = [];

    //creates a factory function to create menu items 
    const menuItemCreator = (name, ingredients, price, image) => {
        return {name, ingredients, price, image}
    };

    //creates menu items with the factory and appends them to menu array
    let firstMenuItem = menuItemCreator('Big Bunz', ['Beef Pattie', ' Cheddar', ' Red Onions', ' Ketchup'], '  $6.95', './Images/image1.png')
    menuArray.push(firstMenuItem);
    let secondMenuItem = menuItemCreator('Hot Bunz', ['Spicy Buttermilk Chicken', ' Blue Cheese', ' Hot Sauce'], '  $7.50', './Images/image2.png')
    menuArray.push(secondMenuItem);
    let thirdMenuItem = menuItemCreator('Small Bunz', ['Beef Pattie', ' Provolone', ' Mustard', 'Ketchup'], '  $8.50', './Images/image3.png')
    menuArray.push(thirdMenuItem);


    //Loops through each menu item in menuArray and adds them to the site
    for (let i=0;i<menuArray.length;i++) {

        const option = document.createElement('div');
            option.className = "menu-item";

        let recipeImage = document.createElement('div');
            recipeImage.className = 'menu-image'
            recipeImage.style.backgroundImage = `url(${menuArray[i].image})`
            option.appendChild(recipeImage)

        let copyBlock = document.createElement('div');
            copyBlock.className = 'copy-block'
            option.appendChild(copyBlock)

        let title = document.createElement('div');
            title.textContent = menuArray[i].name
            title.className = 'h1-menu'
            copyBlock.appendChild(title); 

        let price = document.createElement('div')
            price.textContent = menuArray[i].price
            price.className = 'menu-price'
            copyBlock.appendChild(price);

        let ingredients = document.createElement('div');
            ingredients.textContent = menuArray[i].ingredients
            ingredients.className = 'ingredients'
            copyBlock.appendChild(ingredients)

        menuDiv.appendChild(option)   
    };
    
    return menuDiv;
}

function menuPageLoad() {
    
    const content = document.getElementById("content");

    const topMenu = createTopMenu();
    content.appendChild(topMenu);

    const header = createHeader();
    content.appendChild(header)

    const menu = createMenu();
    content.appendChild(menu);
}

export { menuPageLoad };