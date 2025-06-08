function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    // Ensure the button has a transition
    noButton.style.transition = 'all 0.3s ease-out';

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();

    // Generate random position within the container
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button with smooth animation
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Add a subtle scale and rotation for extra playfulness
    noButton.style.transform = 'scale(1.1) rotate(5deg)';

    // Reset transform after animation
    setTimeout(() => {
        noButton.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

// Function to navigate to yes.html when "Yes" is clicked
function nextPage() {
    // Add a fun animation before navigating
    const yesButton = document.getElementById('yesButton');
    yesButton.style.transition = 'all 0.3s ease-out';
    yesButton.style.transform = 'scale(1.2) rotate(360deg)';

    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 300);
}

// Optional: Ensure buttons are positioned correctly on page load
window.addEventListener('load', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    if (noButton) {
        noButton.style.position = 'relative';
        noButton.style.transition = 'all 0.3s ease-out';
    }

    if (yesButton) {
        yesButton.style.transition = 'all 0.3s ease-out';
    }
});
