export const generateAbout = function(){
    const contentDiv = document.querySelector('#content');

    const aboutUsHeader = document.createElement('h1');
    aboutUsHeader.textContent = 'About Us';
    contentDiv.append(aboutUsHeader);

    const pContainerDiv = document.createElement('div');

    const paragraphs = [];
    for (let i=0; i<5; i++){
        const p = document.createElement('p');
        pContainerDiv.append(p);
        paragraphs.push(p)
    }

    paragraphs[0].textContent = 'Welcome to Flavor Haven, where culinary passion meets fresh, local ingredients.';
    paragraphs[1].textContent = 'Our chefs craft each dish with care, blending traditional recipes with modern twists.';
    paragraphs[2].textContent = 'Since opening our doors in 2010, we have been dedicated to providing a warm and inviting atmosphere.';
    paragraphs[3].textContent = 'We believe in supporting local farmers and sourcing the finest seasonal produce.';
    paragraphs[4].textContent = "Join us for an unforgettable dining experience, whether it's a family dinner or a special celebration.";

    contentDiv.append(pContainerDiv);
}