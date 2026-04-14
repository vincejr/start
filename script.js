let score = 0;
document.getElementById('score').innerText = `Score: ${score}`;

function createTarget() {
    const target = document.createElement('div');
    target.className = 'target';
    // Set random position (you may need to adjust these values based on your layout)
    const topPosition = Math.floor(Math.random() * 500); // Random between 0 and 499 pixels
    const leftPosition = Math.floor(Math.random() * 800); // Random between 0 and 799 pixels
    target.style.top = `${topPosition}px`;
    target.style.left = `${leftPosition}px`;
    document.body.appendChild(target); // Add the target to the body or a container div
}

document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.target');
    targets.forEach(target => {
        target.addEventListener('click', () => {
            score++; // Increment the score by 1
            document.getElementById('score').innerText = `Score: ${score}`; // Update the displayed score
        });
    });
});

setInterval(createTarget, 1000); // Create a new target every second
