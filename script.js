document.addEventListener("DOMContentLoaded", function() {
    // Dynamic data for the categories
    const categories = [
        {
            image: 'images/1.png',
            description: 'This is a description for Product 1. Highlighting key features or offers.'
        },
        {
            image: 'images/2.jpg',
            description: 'This is a description for Product 2. Highlighting key features or offers.'
        },
        {
            image: 'images/3.webp',
            description: 'This is a description for Product 3. Highlighting key features or offers.'
        },
        {
            image: 'images/3.webp',
            description: 'This is a description for Product 3. Highlighting key features or offers.'
        },
    ];
    

    const container = document.getElementById('category-container');

    // Function to generate category cards dynamically
    categories.forEach(category => {
        // Create category card
        const card = document.createElement('div');
        card.classList.add('category-card');

        // Add image
        const img = document.createElement('img');
        img.src = category.image;
        img.alt = 'Category image';
        img.classList.add('category-image');
        card.appendChild(img);

        // Add description
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description-container');

        const description = document.createElement('p');
        description.classList.add('product-description');
        description.innerText = category.description;

        descriptionContainer.appendChild(description);
        card.appendChild(descriptionContainer);

        // Add button
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const button = document.createElement('button');
        button.classList.add('shop-button');
        button.innerText = 'Shop Now';

        buttonContainer.appendChild(button);
        card.appendChild(buttonContainer);

        // Append card to the container
        container.appendChild(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const carouselContent = document.querySelector('.carousel-content');
    const items = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;

    function moveCarousel(direction) {
        const totalItems = items.length;
        if (direction === 'left') {
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        } else {
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        }
        const offset = -currentIndex * 100;  // Each item has a 100% width
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener('click', () => moveCarousel('left'));
    rightArrow.addEventListener('click', () => moveCarousel('right'));
});

