import './styles.css';
import { generateHome } from './home.js';
import { generateMenu } from './menu.js';
import { generateAbout } from './about.js';

generateHome();

const handleNavClicked = function(ev){
    //clear all contents of main content div
    const contentDiv = document.querySelector('#content');
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }

    //generate content based on text content of button clicked
    const buttonText = ev.currentTarget.textContent;
    switch (buttonText) {
        case 'Home':
            generateHome();
            break;
        case 'Menu':
            generateMenu();
            break;
        case 'About':
            generateAbout();
            break;
        default:
            console.error(`Error: Unhandled switch case for button with text content "${buttonText}"`);
            break;
    }
}

const navButtons = document.querySelectorAll('nav button');
navButtons.forEach((button) => {
    button.addEventListener('click', handleNavClicked);
});