export const generateHome = function(){
    const contentDiv = document.querySelector('#content');

    const welcomeH1 = document.createElement('h1');
    welcomeH1.textContent = 'Welcome';
    contentDiv.append(welcomeH1);

    const pContainerDiv = document.createElement('div');

    const p1 = document.createElement('p');
    p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Welcome to our restaurant, where delicious flavors await you. Our chefs are passionate about creating dishes that delight the senses and satisfy every craving. Experience the perfect blend of tradition and innovation in every bite.';
    pContainerDiv.append(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Enjoy a cozy atmosphere and friendly service as you explore our diverse menu crafted with fresh ingredients. From appetizers to desserts, each item is prepared with care and attention to detail. Relax and let our team take care of you while you savor your meal.';
    pContainerDiv.append(p2);

    const p3 = document.createElement('p');
    p3.textContent = "Whether you're here for a quick bite or a special occasion, we strive to make every visit memorable. Our welcoming staff is dedicated to providing exceptional hospitality and ensuring your comfort. Celebrate life's moments with us and create lasting memories.";
    pContainerDiv.append(p3);

    const p4 = document.createElement('p');
    p4.textContent = 'Thank you for choosing us—we look forward to serving you and making your dining experience exceptional! Your satisfaction is our top priority, and we value your feedback. We hope you return soon to enjoy more of what our restaurant has to offer.';
    pContainerDiv.append(p4);

    contentDiv.append(pContainerDiv);
}