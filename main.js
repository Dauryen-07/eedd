function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    noButton.style.transition = 'all 0.3s ease-out';

    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    noButton.style.transform = 'scale(1.1) rotate(5deg)';

    setTimeout(() => {
        noButton.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

function nextPage() {
    const yesButton = document.getElementById('yesButton');
    yesButton.style.transition = 'all 0.3s ease-out';
    yesButton.style.transform = 'scale(1.2) rotate(360deg)';

    setTimeout(() => {
        window.location.href = 'yes.html';
    }, 300);
}

window.addEventListener('load', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    if (noButton) {
        noButton.style.position = 'relative';
        noButton.style.transition = 'all 0.3s ease-out';

        // Works on desktop (mouse hover)
        noButton.addEventListener('mouseover', moveButton);

        // Works on mobile (touch)
        noButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveButton();
        });
    }

    if (yesButton) {
        yesButton.style.transition = 'all 0.3s ease-out';

        // Works on both desktop and mobile
        yesButton.addEventListener('click', nextPage);
        yesButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            nextPage();
        });
    }
});
