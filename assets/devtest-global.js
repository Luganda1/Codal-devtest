// Immediately Invoked Function Expression (IIFE) to initialize click handler setup
(function initializeClickHandler() {
    registerClickEvent(); // Register the click event listener on the document body
})();

// Registers a click event listener on the document body
const registerClickEvent = () => {
    document.body.addEventListener('click', clickHandler);
};

// Main click event handler function to determine and handle specific actions based on clicked element
const clickHandler = (event) => {
    const clickedElement = event.target;

    // Check if the clicked element has the class 'expandable-trigger'
    if (clickedElement.classList.contains('expandable-trigger')) {
        expandSection(clickedElement);
    }
};

// Expands the 'Read More' section by adding an 'is-expanded' class to the parent container
const expandSection = (triggerElement) => {
    // Find the closest container with the class 'expandable-container'
    const expandableContainer = triggerElement.closest('.expandable-container');
    if (expandableContainer) {
        expandableContainer.classList.add('is-expanded'); 
    }
};
