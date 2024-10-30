document.getElementById('surpriseBtn').addEventListener('click', function() {
    const balloonContainer = document.getElementById('balloons');

    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 3 + 3 + 's';
        balloonContainer.appendChild(balloon);
    }
});

function getRandomColor() {
    const colors = ['#ff9a9e', '#fecfef', '#fcb0b3', '#f6a4a9', '#ff79a6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
