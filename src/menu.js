export const generateMenu = function(){
    const contentDiv = document.querySelector('#content');
    
    const menuItems = [];
    for (let i=0; i<5; i++){
        const item = document.createElement('p');
        item.className = 'menu-item';
        menuItems.push(item);
    }

    menuItems[0].textContent = 'Margherita Pizza — Classic pizza topped with fresh tomatoes, mozzarella, and basil.';
    menuItems[1].textContent = 'Spaghetti Carbonara — Pasta tossed with creamy egg sauce, pancetta, and parmesan.';
    menuItems[2].textContent = 'Caesar Salad — Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.';
    menuItems[3].textContent = 'Grilled Salmon — Fresh salmon fillet grilled and served with lemon butter sauce.';
    menuItems[4].textContent = 'Tiramisu — Italian dessert layered with coffee-soaked ladyfingers and mascarpone cream.';

    const pContainerDiv = document.createElement('div');
    pContainerDiv.className = 'menu-container';

    menuItems.forEach((item) => {
        pContainerDiv.append(item);
    })

    contentDiv.append(pContainerDiv);
}