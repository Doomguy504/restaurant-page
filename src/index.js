import './styles.css';
import {generateHome} from './home.js';

generateHome();

const handleNavClicked = function(ev){
    //clear all contents of main content div
    const contentDiv = document.querySelector('#content');
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }

    //generate content based on text inside button clicked
    const buttonText = ev.currentTarget.textContent;
    switch (buttonText) {
        case 'Home':
            generateHome();
            break;
        case 'Menu':
            //TODO add menu generation function
            break;
        case 'About':
            //TODO add about generation function
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