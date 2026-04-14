let score = 0;
let pattern = [];
const targetSize = 50;
const gameDuration = 30000; // 30 seconds

function generatePattern() {
    const numberOfTargets = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfTargets; i++) {
        pattern.push({ x: Math.random() * (window.innerWidth - targetSize), y: Math.random() * (window.innerHeight - targetSize) });
    }
}

function displayPattern() {
    const container = document.getElementById('patternDisplay');
    container.innerHTML = ''; // Clear previous pattern
    pattern.forEach(p => {
        const target = document.createElement('div');
        target.className = 'target';
        target.style.left = `${p.x}px`;
        target.style.top = `${p.y}px`;
        container.appendChild(target);
    });
}

function updateScore() {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
}

document.getElementById('startButton').addEventListener('click', () => {
    pattern = [];
    generatePattern();
    displayPattern();
    setTimeout(() => {
        const targets = document.querySelectorAll('.target');
        targets.forEach(t => t.removeEventListener('click', updateScore));
        alert(`Game Over! Your score is ${score}`);
    }, gameDuration);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.target').forEach(t => t.addEventListener('click', updateScore));
});
